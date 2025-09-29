import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripe = new Stripe(stripeSecret, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Sirens Fortune',
    version: '1.0.0',
  },
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const requestData = await req.json();
    console.log('Received request data:', requestData);

    const { 
      line_items, 
      success_url, 
      cancel_url, 
      price_id, 
      quantity = 1, 
      payment_method_types = ['card'],
      mode = 'payment',
      use_crypto = false,
      customer_id
    } = requestData;

    if ((!price_id && !line_items) || !success_url || !cancel_url) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let sessionConfig: any = {
      payment_method_types,
      mode,
      success_url,
      cancel_url,
    };

    // Add crypto payment support if requested
    if (use_crypto) {
      sessionConfig.payment_method_types = ['card', 'crypto'];
      
      // Add crypto currency options
      sessionConfig.payment_method_options = {
        crypto: {
          currencies: ['usdc', 'eth', 'btc'],
        },
      };
    }

    // If customer_id is provided, use it
    if (customer_id) {
      sessionConfig.customer = customer_id;
    } else {
      // Try to get customer from auth header
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        const {
          data: { user },
          error: getUserError,
        } = await supabase.auth.getUser(token);

        if (!getUserError && user) {
          // Check if customer exists
          const { data: customer, error: getCustomerError } = await supabase
            .from('stripe_customers')
            .select('customer_id')
            .eq('user_id', user.id)
            .is('deleted_at', null)
            .maybeSingle();

          if (!getCustomerError && customer && customer.customer_id) {
            sessionConfig.customer = customer.customer_id;
          } else {
            // Create new customer
            const newCustomer = await stripe.customers.create({
              email: user.email,
              metadata: {
                userId: user.id,
              },
            });

            console.log(`Created new Stripe customer ${newCustomer.id} for user ${user.id}`);

            const { error: createCustomerError } = await supabase.from('stripe_customers').insert({
              user_id: user.id,
              customer_id: newCustomer.id,
            });

            if (createCustomerError) {
              console.error('Failed to save customer information in the database', createCustomerError);
            } else {
              sessionConfig.customer = newCustomer.id;
            }
          }
        }
      }
    }

    // Handle either line_items (for cart) or price_id (for single item)
    if (line_items && Array.isArray(line_items) && line_items.length > 0) {
      console.log('Processing cart checkout with line_items:', line_items);
      sessionConfig.line_items = line_items;
    } else if (price_id) {
      console.log('Processing single item checkout with price_id:', price_id);
      sessionConfig.line_items = [
        {
          price: price_id,
          quantity: quantity,
        },
      ];
    } else {
      return new Response(
        JSON.stringify({ error: 'No valid line items or price ID provided' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Creating Stripe session with config:', JSON.stringify(sessionConfig, null, 2));

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create(sessionConfig);

    console.log('Stripe session created successfully:', session.id);

    return new Response(
      JSON.stringify({ 
        sessionId: session.id, 
        url: session.url 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Checkout error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

// Helper function to validate parameters
type ExpectedType = 'string' | { values: string[] };
type Expectations<T> = { [K in keyof T]: ExpectedType };

function validateParameters<T extends Record<string, any>>(values: T, expected: Expectations<T>): string | undefined {
  for (const parameter in values) {
    const expectation = expected[parameter];
    const value = values[parameter];

    if (expectation === 'string') {
      if (value == null) {
        return `Missing required parameter ${parameter}`;
      }
      if (typeof value !== 'string') {
        return `Expected parameter ${parameter} to be a string got ${JSON.stringify(value)}`;
      }
    } else {
      if (!expectation.values.includes(value)) {
        return `Expected parameter ${parameter} to be one of ${expectation.values.join(', ')}`;
      }
    }
  }

  return undefined;
}
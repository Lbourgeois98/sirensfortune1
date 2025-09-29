import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';

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

    const { line_items, success_url, cancel_url, price_id, quantity = 1 } = requestData;

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
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
    };

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
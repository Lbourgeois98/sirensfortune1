import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with publishable key
const stripePromise = loadStripe('pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO');

// Function to initialize Crypto Onramp
export const initializeCryptoOnramp = async (priceId: string, successUrl: string, cancelUrl: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    // Create a checkout session with crypto payment option
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_id: priceId,
        success_url: successUrl,
        cancel_url: cancelUrl,
        use_crypto: true,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error initializing crypto onramp:', error);
    throw error;
  }
};

// Function to create a standard checkout session
export const createCheckoutSession = async (
  lineItems: Array<{ price: string; quantity: number }>,
  successUrl: string,
  cancelUrl: string,
  useCrypto = false
) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line_items: lineItems,
        success_url: successUrl,
        cancel_url: cancelUrl,
        use_crypto: useCrypto,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export default stripePromise;
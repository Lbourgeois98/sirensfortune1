import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO');

export default stripePromise;
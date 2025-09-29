import React, { useState } from 'react';
import { ShoppingCart, Loader2, Plus } from 'lucide-react';
import { products, Product } from '../stripe-config';
import { useCart } from '../contexts/CartContext';
import Cart from '../components/Cart';

const Shop: React.FC = () => {
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { addToCart, openCart, state, clearCart } = useCart();

  const getQuantityOptions = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      options.push(i);
    }
    return options;
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    openCart();
  };

  const createCheckoutSession = async (lineItems: any[]) => {
    try {
      console.log('Creating checkout with items:', lineItems);
      
      const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer sk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00YourSecretKey`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'payment_method_types[]': 'card',
          'mode': 'payment',
          'success_url': `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          'cancel_url': `${window.location.origin}/shop`,
          ...lineItems.reduce((acc, item, index) => {
            acc[`line_items[${index}][price_data][currency]`] = 'usd';
            acc[`line_items[${index}][price_data][product_data][name]`] = item.name;
            acc[`line_items[${index}][price_data][product_data][description]`] = item.description;
            acc[`line_items[${index}][price_data][unit_amount]`] = item.price * 100;
            acc[`line_items[${index}][quantity]`] = item.quantity;
            return acc;
          }, {} as any)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();
      return session;
    } catch (error) {
      console.error('Direct Stripe API failed, trying Supabase function:', error);
      
      // Fallback to Supabase function
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line_items: lineItems.map(item => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                description: item.description,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          })),
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/shop`,
        }),
      });

      if (!response.ok) {
        throw new Error('Supabase function also failed');
      }

      return await response.json();
    }
  };

  const handleCheckout = async () => {
    if (state.items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setIsCheckingOut(true);

    try {
      const lineItems = state.items.map(item => ({
        name: item.product.name,
        description: item.product.description,
        price: item.product.price,
        quantity: item.quantity,
      }));

      const session = await createCheckoutSession(lineItems);
      
      if (session.url) {
        clearCart();
        window.location.href = session.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleDirectCheckout = async (product: Product) => {
    setIsCheckingOut(true);

    try {
      const quantity = quantities[product.id] || 1;
      
      const lineItems = [{
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: quantity,
      }];

      const session = await createCheckoutSession(lineItems);
      
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Direct checkout failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
            Ocean Treasures Collection
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Discover mystical treasures from the deepest ocean realms. Each item comes with a certificate of authenticity and care guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const selectedQuantity = quantities[product.id] || 1;
            const totalPrice = product.price * selectedQuantity;

            return (
              <div
                key={product.id}
                className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-6 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-cyan-500/30 flex items-center justify-center text-6xl bg-gradient-to-br from-teal-600 to-blue-600">
                    {product.name === 'Seashells' ? '🐚' : 
                     product.name === 'Coral' ? '🪸' :
                     product.name === 'Sand Dollars' ? '🪙' :
                     product.name === 'Aquamarines' ? '💎' :
                     product.name === 'Sea Urchins' ? '🦔' :
                     product.name === 'Shipwreck Treasures' ? '⚱️' :
                     product.name === 'Pearls' ? '🦪' : '🌊'}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-100 mb-2">{product.name}</h3>
                </div>

                <p className="text-cyan-300 text-sm mb-4 text-center leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-200">Unit Price:</span>
                    <span className="text-amber-400 font-bold">${product.price.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-cyan-200">Quantity:</span>
                    <select
                      value={selectedQuantity}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      className="bg-blue-900/50 border border-cyan-500/30 rounded-lg px-3 py-1 text-cyan-100 focus:outline-none focus:border-amber-500/50"
                    >
                      {getQuantityOptions().map(qty => (
                        <option key={qty} value={qty}>{qty}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-cyan-500/30 pt-3">
                    <span className="text-cyan-200 font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-amber-400">${totalPrice.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => handleDirectCheckout(product)}
                    disabled={isCheckingOut}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                  >
                    {isCheckingOut ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        <span>Buy Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-500/30 p-8">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">
              Secure Payments
            </h3>
            <p className="text-cyan-100 mb-4">
              Pay securely with credit card through Stripe's encrypted payment system
            </p>
            <div className="flex justify-center items-center space-x-4 text-amber-400">
              <span>Visa</span>
              <span>•</span>
              <span>Mastercard</span>
              <span>•</span>
              <span>American Express</span>
              <span>•</span>
              <span>& more</span>
            </div>
          </div>
        </div>
        
        <Cart onCheckout={handleCheckout} isCheckingOut={isCheckingOut} />
      </div>
    </div>
  );
};

export default Shop;
import React from 'react';
import { X, Plus, Minus, ShoppingCart, Loader2, Bitcoin } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  onCheckout: () => void;
  isCheckingOut: boolean;
  useCrypto: boolean;
  setUseCrypto: (value: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout, isCheckingOut, useCrypto, setUseCrypto }) => {
  const { state, removeFromCart, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={closeCart}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-teal-900/95 to-blue-900/95 backdrop-blur-lg border-l border-cyan-500/30 z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-cyan-100 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-amber-400" />
              <span>Your Cart</span>
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-cyan-300" />
            </button>
          </div>
          <p className="text-cyan-300 mt-2">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
          </p>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-cyan-500/50 mx-auto mb-4" />
              <p className="text-cyan-300 text-lg">Your cart is empty</p>
              <p className="text-cyan-400 text-sm mt-2">Add some ocean treasures to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-gradient-to-r from-teal-800/30 to-blue-800/30 rounded-xl p-4 border border-cyan-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-cyan-500/30 flex-shrink-0">
                      <img 
                        src={item.product.icon} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center text-2xl bg-gradient-to-br from-teal-600 to-blue-600';
                          fallback.textContent = item.product.name === 'Seashells' ? '🐚' : 
                                               item.product.name === 'Coral' ? '🪸' :
                                               item.product.name === 'Sand Dollars' ? '🪙' :
                                               item.product.name === 'Aquamarines' ? '💎' :
                                               item.product.name === 'Sea Urchins' ? '🦔' :
                                               item.product.name === 'Shipwreck Treasures' ? '⚱️' :
                                               item.product.name === 'Pearls' ? '🪬' : '🌊';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-cyan-100 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-amber-400 font-bold">
                        ${item.product.price.toFixed(2)} each
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-cyan-500/20 rounded transition-colors"
                        >
                          <Minus className="h-4 w-4 text-cyan-300" />
                        </button>
                        
                        <span className="text-cyan-100 font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-cyan-500/20 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4 text-cyan-300" />
                        </button>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="ml-auto p-1 hover:bg-red-500/20 rounded transition-colors"
                        >
                          <X className="h-4 w-4 text-red-400" />
                        </button>
                      </div>
                      
                      <div className="text-right mt-2">
                        <span className="text-cyan-100 font-bold">
                          Total: ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="p-6 border-t border-cyan-500/30 bg-gradient-to-r from-teal-900/50 to-blue-900/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-cyan-100">Total:</span>
              <span className="text-2xl font-bold text-amber-400">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            
            {/* Payment Options */}
            <div className="mb-4 flex items-center justify-center space-x-4">
              <button
                onClick={() => setUseCrypto(false)}
                className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                  !useCrypto 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold' 
                    : 'bg-blue-900/30 text-cyan-300 border border-cyan-500/30'
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Card</span>
              </button>
              
              <button
                onClick={() => setUseCrypto(true)}
                className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                  useCrypto 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold' 
                    : 'bg-blue-900/30 text-cyan-300 border border-cyan-500/30'
                }`}
              >
                <Bitcoin className="h-4 w-4" />
                <span>Crypto</span>
              </button>
            </div>
            
            <button
              onClick={onCheckout}
              disabled={isCheckingOut}
              className={`w-full flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 ${
                useCrypto 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
              }`}
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  {useCrypto ? <Bitcoin className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                  <span>Checkout {useCrypto ? 'with Crypto' : 'Now'}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
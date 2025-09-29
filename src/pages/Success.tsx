import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // In a real app, you might fetch order details from your backend
      // For now, we'll show a generic success message
      setOrderDetails({ sessionId });
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-cyan-100">
            Thank you for your purchase from Sirens Fortune
          </p>
        </div>

        <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="h-8 w-8 text-amber-400" />
            <h2 className="text-2xl font-bold text-cyan-100">Order Confirmation</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-cyan-500/30">
              <span className="text-cyan-200">Order Status:</span>
              <span className="text-green-400 font-semibold">Confirmed</span>
            </div>
            
            {sessionId && (
              <div className="flex justify-between items-center py-3 border-b border-cyan-500/30">
                <span className="text-cyan-200">Session ID:</span>
                <span className="text-cyan-100 font-mono text-sm">{sessionId.substring(0, 20)}...</span>
              </div>
            )}
            
            <div className="flex justify-between items-center py-3 border-b border-cyan-500/30">
              <span className="text-cyan-200">Processing Time:</span>
              <span className="text-cyan-100">3-7 business days</span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-cyan-200">Delivery Method:</span>
              <span className="text-cyan-100">Mystical Ocean Portal</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-500/30 p-8 mb-8">
          <h3 className="text-2xl font-bold text-amber-300 mb-4">What Happens Next?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-400 text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-100">Treasure Preparation</h4>
                <p className="text-cyan-300">Our aquatic specialists will carefully prepare your ocean treasures with proper enchantments.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-400 text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-100">Quality Assurance</h4>
                <p className="text-cyan-300">Each treasure undergoes rigorous quality checks to ensure maximum magical potency.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-400 text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-100">Mystical Delivery</h4>
                <p className="text-cyan-300">Your treasures will be delivered through our secure ocean portal network.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <div className="text-cyan-300">
            <p>Need help? <Link to="/contact" className="text-amber-400 hover:text-amber-300">Contact our support team</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
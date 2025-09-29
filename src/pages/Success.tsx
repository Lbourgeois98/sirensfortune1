import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentType, setPaymentType] = useState<'card' | 'crypto' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (!sessionId) {
        setIsLoading(false);
        return;
      }

      try {
        // In a real implementation, you would fetch the session details from your backend
        // For now, we'll simulate this with a timeout
        setTimeout(() => {
          // This would normally come from the API
          // For demo purposes, randomly select payment type
          const randomPaymentType = Math.random() > 0.5 ? 'card' : 'crypto';
          setPaymentType(randomPaymentType as 'card' | 'crypto');
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching session details:', error);
        setIsLoading(false);
      }
    };

    fetchSessionDetails();
  }, [sessionId]);

  const handleReturnToShop = () => {
    navigate('/shop');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-cyan-400 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-cyan-100 mb-2">Processing your payment...</h2>
          <p className="text-cyan-300">Please wait while we confirm your transaction.</p>
        </div>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-gradient-to-b from-red-900/50 to-red-800/50 backdrop-blur-lg rounded-2xl border border-red-500/30 p-8 max-w-md w-full text-center">
          <div className="text-red-400 text-6xl mb-6">⚠️</div>
          <h2 className="text-2xl font-bold text-red-100 mb-4">Invalid Session</h2>
          <p className="text-red-200 mb-6">
            We couldn't find your payment information. Please return to the shop and try again.
          </p>
          <button
            onClick={handleReturnToShop}
            className="flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 mx-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Return to Shop</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-emerald-900/50 to-teal-800/50 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8 max-w-md w-full">
        <div className="text-center">
          <CheckCircle className="h-20 w-20 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-emerald-100 mb-4">Payment Successful!</h2>
          
          {paymentType === 'crypto' ? (
            <div className="mb-6">
              <p className="text-emerald-200 mb-4">
                Your crypto payment has been processed successfully. Your ocean treasures are on their way!
              </p>
              <div className="bg-emerald-800/30 rounded-lg p-4 border border-emerald-500/20">
                <p className="text-emerald-300 text-sm">
                  Transaction ID: {sessionId.substring(0, 8)}...{sessionId.substring(sessionId.length - 8)}
                </p>
                <p className="text-emerald-300 text-sm mt-2">
                  Payment Method: Cryptocurrency
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-emerald-200 mb-4">
                Your payment has been processed successfully. Your ocean treasures are on their way!
              </p>
              <div className="bg-emerald-800/30 rounded-lg p-4 border border-emerald-500/20">
                <p className="text-emerald-300 text-sm">
                  Order ID: {sessionId.substring(0, 8)}...{sessionId.substring(sessionId.length - 8)}
                </p>
                <p className="text-emerald-300 text-sm mt-2">
                  Payment Method: Credit Card
                </p>
              </div>
            </div>
          )}
          
          <p className="text-emerald-200 mb-6">
            We've sent a confirmation email with your order details.
          </p>
          
          <button
            onClick={handleReturnToShop}
            className="flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 mx-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Return to Shop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
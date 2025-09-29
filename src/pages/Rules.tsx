import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const Rules: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
            Rules & Guidelines
          </h1>
          <p className="text-xl text-cyan-100">
            Important information for all Sirens Fortune collectors
          </p>
        </div>

        <div className="space-y-8">
          {/* Purchase Rules */}
          <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-amber-400" />
              <h2 className="text-3xl font-bold text-cyan-100">Purchase Rules</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Minimum Purchase Requirements</h3>
                  <p className="text-cyan-300">Ocean treasures can be purchased individually, with quantities ranging from 1 to 100 units per transaction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Payment Processing</h3>
                  <p className="text-cyan-300">All payments are processed securely through Stripe's cryptocurrency onramp. Transactions are final once confirmed on the blockchain.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Delivery Timeline</h3>
                  <p className="text-cyan-300">Ocean treasures require 3-7 business days for proper preparation and enchantment before delivery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Care Guidelines */}
          <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Info className="h-8 w-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-cyan-100">Care Guidelines</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Habitat Requirements</h3>
                  <p className="text-cyan-300">Each treasure comes with specific care requirements. Mystical items need proper storage and moonlight exposure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Feeding Schedule</h3>
                  <p className="text-cyan-300">Legendary treasures require special care including starlight essence and deep-sea mineral treatments (provided with purchase).</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Health Monitoring</h3>
                  <p className="text-cyan-300">Regular check-ups with certified treasure keepers are recommended to maintain optimal magical properties.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restrictions */}
          <div className="bg-gradient-to-b from-red-900/30 to-orange-900/30 backdrop-blur-lg rounded-2xl border border-red-500/30 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h2 className="text-3xl font-bold text-cyan-100">Important Restrictions</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Age Restrictions</h3>
                  <p className="text-cyan-300">Purchasers must be 18+ years old. Legendary treasures require additional certification for handling.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Geographic Limitations</h3>
                  <p className="text-cyan-300">Some mystical treasures cannot be shipped to certain regions due to magical interference zones.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Return Policy</h3>
                  <p className="text-cyan-300">Due to the mystical nature of our treasures, returns are only accepted within 24 hours and require special handling procedures.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-500/30 p-8 text-center">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">
              Questions About Our Rules?
            </h3>
            <p className="text-cyan-100 mb-6">
              Our team of treasure specialists is here to help you understand all guidelines and requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
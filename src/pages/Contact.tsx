import React from 'react';
import { Facebook, MessageCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
            Contact Our Depths
          </h1>
          <p className="text-xl text-cyan-100">
            Connect with our team of aquatic specialists through Facebook
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Facebook Contact */}
          <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-100 mb-6 text-center">Connect on Facebook</h2>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="h-10 w-10 text-blue-400" />
                </div>
                <p className="text-cyan-300 mb-6">
                  Follow us for the latest treasure discoveries, special offers, and underwater adventures!
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/sirens2fortune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <Facebook className="h-6 w-6" />
                      <span>Visit Our Facebook Page</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://m.me/sirens2fortune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <MessageCircle className="h-6 w-6" />
                      <span>Send Direct Message</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Response Times */}
            <div className="bg-gradient-to-b from-blue-800/50 to-purple-800/50 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-cyan-100">Response Times</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Facebook Messages</span>
                  <span className="text-cyan-100 font-semibold">Within 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Facebook Comments</span>
                  <span className="text-cyan-100 font-semibold">Within 4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">General Inquiries</span>
                  <span className="text-cyan-100 font-semibold">Same day</span>
                </div>
                <div className="border-t border-cyan-500/30 pt-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-200">Emergency Support</span>
                    <span className="text-amber-400 font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Help With */}
            <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-2xl font-bold text-cyan-100 mb-6">How We Can Help</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-100">Treasure Inquiries</h3>
                    <p className="text-cyan-300 text-sm">Questions about our ocean treasures and their care</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-100">Order Support</h3>
                    <p className="text-cyan-300 text-sm">Help with purchases, shipping, and delivery</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-100">Custom Requests</h3>
                    <p className="text-cyan-300 text-sm">Special treasure hunting expeditions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-100">Partnership Opportunities</h3>
                    <p className="text-cyan-300 text-sm">Collaborate with fellow treasure enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Info */}
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-500/30 p-8 text-center">
              <Facebook className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-300 mb-4">
                Stay Connected
              </h3>
              <p className="text-cyan-100 mb-6">
                Follow our Facebook page for exclusive treasure reveals, behind-the-scenes content, and special collector events.
              </p>
              <div className="text-cyan-300 text-sm">
                <p>@sirens2fortune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Gift, Star, Crown, Zap, Users, Calendar } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
            Exclusive Bonuses
          </h1>
          <p className="text-xl text-cyan-100">
            Unlock magical rewards and special privileges as a Sirens Fortune collector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* First Purchase Bonus */}
          <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">First Dive Bonus</h3>
            <p className="text-cyan-300 mb-6">
              New collectors receive a complimentary set of rare seashells with their first purchase over $100.
            </p>
            <div className="bg-amber-500/10 rounded-lg p-4">
              <span className="text-amber-400 font-bold text-lg">Free Rare Seashells</span>
            </div>
          </div>

          {/* Loyalty Rewards */}
          <div className="bg-gradient-to-b from-purple-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-8 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">Loyalty Stars</h3>
            <p className="text-cyan-300 mb-6">
              Earn 1 star for every $50 spent. Collect 10 stars to unlock exclusive rare treasures.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4">
              <span className="text-purple-400 font-bold text-lg">Unlock Rare Treasures</span>
            </div>
          </div>

          {/* VIP Status */}
          <div className="bg-gradient-to-b from-amber-800/50 to-yellow-800/50 backdrop-blur-lg rounded-2xl border border-amber-500/30 p-8 text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">Royal Collector</h3>
            <p className="text-cyan-300 mb-6">
              Spend $1000+ to become a Royal Collector with 20% off all future purchases and priority access.
            </p>
            <div className="bg-amber-500/10 rounded-lg p-4">
              <span className="text-amber-400 font-bold text-lg">20% Lifetime Discount</span>
            </div>
          </div>
        </div>

        {/* Seasonal Events */}
        <div className="bg-gradient-to-r from-blue-800/50 to-teal-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-cyan-100">Seasonal Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">Moonlight Festival</h3>
              <p className="text-cyan-300 mb-4">
                During full moons, all Legendary treasures come with bonus magical enhancements and glow-in-the-dark properties.
              </p>
              <span className="text-blue-400 font-semibold">Next Event: March 15th</span>
            </div>
            
            <div className="bg-teal-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">Deep Sea Discovery</h3>
              <p className="text-cyan-300 mb-4">
                Quarterly events featuring newly discovered treasures at special introductory prices with exclusive collector certificates.
              </p>
              <span className="text-teal-400 font-semibold">Next Event: April 1st</span>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-gradient-to-r from-green-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-green-500/30 p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-green-400" />
            <h2 className="text-3xl font-bold text-cyan-100">Referral Treasures</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$25</div>
              <p className="text-cyan-300">Credit for each friend who makes their first purchase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$50</div>
              <p className="text-cyan-300">Bonus when your referral spends over $200</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Free</div>
              <p className="text-cyan-300">Rare species after 5 successful referrals</p>
            </div>
          </div>
        </div>

        {/* Special Achievements */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-cyan-100">Collector Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-purple-900/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="font-bold text-cyan-100 mb-1">Species Master</h4>
              <p className="text-xs text-cyan-300">Collect all 7 treasure types</p>
              <div className="text-purple-400 font-semibold mt-2">Reward: Exclusive Leviathan</div>
            </div>
            
            <div className="bg-purple-900/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">💎</div>
              <h4 className="font-bold text-cyan-100 mb-1">Deep Spender</h4>
              <p className="text-xs text-cyan-300">Spend $5000 total</p>
              <div className="text-purple-400 font-semibold mt-2">Reward: Diamond Status</div>
            </div>
            
            <div className="bg-purple-900/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-cyan-100 mb-1">Speed Collector</h4>
              <p className="text-xs text-cyan-300">5 purchases in 30 days</p>
              <div className="text-purple-400 font-semibold mt-2">Reward: Lightning Pearl</div>
            </div>
            
            <div className="bg-purple-900/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🌟</div>
              <h4 className="font-bold text-cyan-100 mb-1">Legendary Hunter</h4>
              <p className="text-xs text-cyan-300">Own 3 Legendary treasures</p>
              <div className="text-purple-400 font-semibold mt-2">Reward: Cosmic Crown</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
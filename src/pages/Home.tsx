import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Crown, Waves, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Sirens Fortune
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Discover the most exquisite collection of ocean treasures from the mystical depths of the sea
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Fish className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">Premium Quality</h3>
              <p className="text-cyan-300">
                Hand-selected ocean treasures from the deepest sea trenches, each one a masterpiece of nature's artistry.
              </p>
            </div>

            <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">Royal Treatment</h3>
              <p className="text-cyan-300">
                Every purchase comes with our signature care package and lifetime support from our treasure specialists.
              </p>
            </div>

            <div className="bg-gradient-to-b from-teal-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">Ocean Fresh</h3>
              <p className="text-cyan-300">
                Direct from pristine underwater kingdoms, delivered with the magic of the deep sea still flowing through them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-3xl border border-amber-500/30 p-12">
            <h3 className="text-4xl font-bold text-amber-300 mb-6">
              Begin Your Treasure Hunt
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied collectors who have discovered the treasures of Sirens Fortune. 
              Your perfect ocean treasure awaits in the depths below.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Shopping</span>
              <Waves className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
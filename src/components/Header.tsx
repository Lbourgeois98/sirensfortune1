import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, getTotalItems } = useCart();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Rules', href: '/rules' },
    { name: 'Bonuses', href: '/bonuses' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-50 bg-gradient-to-r from-teal-900/90 to-blue-900/90 backdrop-blur-lg border-b border-cyan-500/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/208170b9-96e8-46fd-a823-dae9e04a4291.jpeg"
                alt="Sirens Fortune"
                className="h-16 w-auto rounded-lg border-2 border-amber-400 shadow-xl glitter-effect"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-amber-400/20 rounded-lg"></div>
            </div>
            <div>
              <h1 className="text-3xl ocean-title">
                Sirens Fortune
              </h1>
              <p className="ocean-accent text-sm font-medium">Premium Ocean Treasures</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-amber-500/20 ocean-accent border border-amber-500/30 glitter-effect'
                    : 'ocean-text hover:ocean-accent hover:bg-cyan-500/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={toggleCart}
              className="relative p-2 bg-amber-500/20 rounded-lg border border-amber-500/30 hover:bg-amber-500/30 transition-colors glitter-effect"
            >
              <ShoppingCart className="h-5 w-5 ocean-accent" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30 glitter-effect"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 ocean-text" />
            ) : (
              <Menu className="h-6 w-6 ocean-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-500/30 pt-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-amber-500/20 ocean-accent border border-amber-500/30 glitter-effect'
                      : 'ocean-text hover:ocean-accent hover:bg-cyan-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
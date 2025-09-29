import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Success from './pages/Success';
import Rules from './pages/Rules';
import Bonuses from './pages/Bonuses';
import Contact from './pages/Contact';
import './styles/globals.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-teal-900 via-blue-900 to-slate-900">
          <div className="fixed inset-0 opacity-10">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
          </div>
          
          <Header />
          
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/success" element={<Success />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/bonuses" element={<Bonuses />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
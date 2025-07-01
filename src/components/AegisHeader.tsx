
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, User } from 'phosphor-react';

const AegisHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel" style={{ 
      padding: '1rem 2rem',
      margin: 0,
      borderRadius: 0,
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
            Aegis
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/transactions" className="text-gray-300 hover:text-white transition-colors">
            Transactions
          </Link>
          <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link to="/support" className="text-gray-300 hover:text-white transition-colors">
            Support
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="btn-secondary hidden md:inline-block">
            Sign In
          </Link>
          <Link to="/register" className="btn-primary">
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AegisHeader;

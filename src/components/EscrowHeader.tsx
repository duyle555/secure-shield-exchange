
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, List, Sun, Moon, X } from 'phosphor-react';
import { useDarkMode } from '@/hooks/useDarkMode';

const EscrowHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-xl font-bold group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-primary">
              <Shield className="w-6 h-6 text-white" weight="fill" />
            </div>
            <span className="bg-gradient-to-r from-dark-text to-primary bg-clip-text text-transparent">
              EscrowVN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-dark-subtle hover:text-dark-text transition-colors font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link to="/create-transaction" className="text-dark-subtle hover:text-dark-text transition-colors font-medium hover:text-primary">
              Tạo giao dịch
            </Link>
            <Link to="#how-it-works" className="text-dark-subtle hover:text-dark-text transition-colors font-medium hover:text-primary">
              Hướng dẫn
            </Link>
            <Link to="/support" className="text-dark-subtle hover:text-dark-text transition-colors font-medium hover:text-primary">
              Hỗ trợ
            </Link>
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-xl text-dark-subtle hover:text-dark-text hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Auth Buttons */}
            <Link 
              to="/auth" 
              className="px-4 py-2 text-sm font-medium text-dark-subtle hover:text-dark-text rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Đăng nhập
            </Link>
            <Link 
              to="/auth" 
              className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-xl shadow-glow-primary hover:shadow-glow-primary-strong transition-all duration-300"
            >
              Bắt đầu
            </Link>
          </div>
            
          {/* Mobile Menu Button - Clean mobile header with only hamburger */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-xl text-dark-subtle hover:text-dark-text hover:bg-white/10 transition-all duration-300"
            aria-label="Open menu"
          >
            <List className="w-6 h-6" weight="light" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-80 h-full glass-panel border-l border-white/10">
            <div className="p-4">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-dark-subtle hover:text-dark-text hover:bg-white/10 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                {/* Dark Mode Toggle in Mobile Menu */}
                <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <span className="text-lg font-medium text-dark-subtle">Chế độ tối</span>
                  <button 
                    onClick={toggleDarkMode} 
                    className="p-2 rounded-xl text-dark-subtle hover:text-dark-text hover:bg-white/10 transition-all duration-300"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" weight="light" /> : <Moon className="w-5 h-5" weight="light" />}
                  </button>
                </div>
                
                <div className="border-t border-white/10"></div>
                
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-3 text-lg font-medium text-dark-subtle hover:text-dark-text hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/create-transaction" 
                  className="block px-4 py-3 text-lg font-medium text-dark-subtle hover:text-dark-text hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Tạo giao dịch
                </Link>
                <Link 
                  to="#how-it-works" 
                  className="block px-4 py-3 text-lg font-medium text-dark-subtle hover:text-dark-text hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Hướng dẫn
                </Link>
                <Link 
                  to="/support" 
                  className="block px-4 py-3 text-lg font-medium text-dark-subtle hover:text-dark-text hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Hỗ trợ
                </Link>
                
                <div className="border-t border-white/10 pt-4 mt-6">
                  <Link 
                    to="/auth" 
                    className="block px-4 py-3 text-lg font-medium text-dark-subtle hover:text-dark-text hover:bg-white/10 rounded-lg transition-all duration-300 mb-2"
                    onClick={toggleMobileMenu}
                  >
                    Đăng nhập
                  </Link>
                  <Link 
                    to="/auth" 
                    className="block btn-primary px-4 py-3 text-lg font-semibold text-white rounded-xl shadow-glow-primary text-center"
                    onClick={toggleMobileMenu}
                  >
                    Bắt đầu ngay
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EscrowHeader;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate } from '../animations/AnimationLibrary';
import { ArrowRight, Shield, Sparkle } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current && subheadlineRef.current && ctaRef.current) {
      animate.heroTextReveal(
        headlineRef.current,
        subheadlineRef.current,
        ctaRef.current
      );
    }

    // Floating animation for decorative elements
    const floatingElements = document.querySelectorAll('.floating-element');
    if (floatingElements.length > 0) {
      animate.floatingElements(Array.from(floatingElements) as HTMLElement[]);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="floating-element absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="floating-element absolute bottom-40 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/20 to-violet-600/20 backdrop-blur-sm"></div>
        <div className="floating-element absolute bottom-20 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Hero Badge */}
        <div className="mb-8 flex justify-center">
          <div className="glass-panel inline-flex items-center space-x-2 py-2 px-4 text-sm">
            <Sparkle className="w-4 h-4 text-violet-400" />
            <span>The Future of P2P Transactions</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 ref={headlineRef} className="hero-headline">
          The Future of Secure Transactions
        </h1>

        {/* Sub-headline */}
        <p ref={subheadlineRef} className="hero-subheadline mx-auto">
          P2P escrow for high-value digital and physical assets. Built on trust, powered by technology.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg">
            <span>Start a Transaction</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="#how-it-works" className="btn-secondary flex items-center space-x-2 px-8 py-4 text-lg">
            <Shield className="w-5 h-5" />
            <span>How It Works</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>PCI DSS Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>KYC/AML Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

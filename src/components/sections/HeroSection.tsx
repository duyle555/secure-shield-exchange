
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on mount
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 200);
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-dark-background overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-30"></div>
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div ref={heroRef} className="relative z-10 flex flex-col items-center gap-8 text-center px-4 max-w-6xl mx-auto">
        {/* Main Content - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Giao dịch An toàn
              </span>{' '}
              Tuyệt đối.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-dark-subtle leading-relaxed">
              EscrowVN giữ tiền của bạn bằng tấm khiên bảo mật. Người bán chỉ nhận được thanh toán khi bạn đã hoàn toàn hài lòng.
            </p>

            {/* CTA Button */}
            <Link 
              to="/auth" 
              className="btn-primary px-12 py-6 text-xl font-bold text-white rounded-2xl shadow-glow-primary hover:shadow-glow-primary-strong transition-all duration-300 inline-flex items-center justify-center"
            >
              Bắt đầu Giao dịch An toàn
            </Link>
          </div>

          {/* Right Side - 3D Graphics Placeholder */}
          <div className="relative flex items-center justify-center">
            {/* 3D Shield Placeholder - Will be replaced with Spline model */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main Shield */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-8 glass-card rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl text-white font-bold">ES</span>
                  </div>
                  <p className="text-dark-text font-bold text-lg">EscrowVN</p>
                  <p className="text-dark-subtle text-sm">Khiên Bảo vệ</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-dark-subtle rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dark-subtle rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'phosphor-react';
import usePageLoadAnimation from '@/hooks/usePageLoadAnimation';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = usePageLoadAnimation();

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

      <div ref={containerRef} className="relative z-10 container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Main Content - Mobile-First Single Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Mobile-First Typography */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Main Headline - Responsive Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-text leading-tight tracking-tight fade-in-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Giao dịch An toàn
              </span>{' '}
              Tuyệt đối.
            </h1>

            {/* Sub-headline - Mobile Optimized */}
            <p className="text-lg sm:text-xl lg:text-2xl text-dark-subtle leading-relaxed opacity-80 font-light fade-in-up px-2 sm:px-0">
              EscrowVN giữ tiền của bạn bằng tấm khiên bảo mật. Người bán chỉ nhận được thanh toán khi bạn đã hoàn toàn hài lòng.
            </p>

            {/* CTA Button - Enhanced Touch Target */}
            <Link 
              to="/auth" 
              className="btn-primary px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold text-white rounded-2xl shadow-glow-primary hover:shadow-glow-primary-strong active:scale-95 transition-all duration-300 inline-flex items-center justify-center fade-in-up min-h-[44px] min-w-[200px]"
            >
              Bắt đầu Giao dịch An toàn
            </Link>
          </div>

          {/* CSS-based Shield Design - Professional Interactive */}
          <div className="relative flex items-center justify-center fade-in-up order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              {/* Background Glow Effect */}  
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* CSS-based Shield */}
              <div className="absolute inset-6 sm:inset-8 glass-card rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 cursor-pointer perspective-1000">
                <div className="text-center transform-gpu transition-transform duration-700 group-hover:rotateY-12 group-hover:rotateX-6">
                  {/* Modern Shield Icon with Updated Gradient */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl group-hover:shadow-glow-primary transform transition-all duration-500 group-hover:scale-110">
                    {/* Inner glow effect */}
                    <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                    
                    {/* ES Icon */}
                    <div className="relative z-10 text-white font-bold text-2xl sm:text-4xl drop-shadow-lg">
                      ES
                    </div>
                    
                    {/* Animated security rings */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping"></div>
                    <div className="absolute inset-2 rounded-xl border border-accent/40 animate-pulse"></div>
                  </div>
                  
                  {/* Brand text with enhanced styling */}
                  <div className="space-y-1">
                    <p className="text-dark-text font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      EscrowVN
                    </p>
                    <p className="text-dark-subtle text-sm sm:text-base font-medium">
                      Khiên Bảo vệ
                    </p>
                    
                    {/* Security badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mt-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      Bảo mật cấp cao
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Interactive Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full blur-xl animate-float group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-float group-hover:animate-bounce transition-all duration-300" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-8 h-8 sm:w-12 sm:h-12 bg-accent/30 rounded-full blur-lg animate-float group-hover:animate-bounce transition-all duration-300" style={{ animationDelay: '4s' }}></div>
              
              {/* Security particles */}
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-2 w-1 h-1 bg-accent rounded-full animate-ping opacity-40" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce fade-in-up">
          <div className="w-6 h-10 border-2 border-dark-subtle rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dark-subtle rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

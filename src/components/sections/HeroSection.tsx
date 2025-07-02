
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Play, CheckCircle } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on mount
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-panel rounded-full text-sm font-medium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Nền tảng Escrow #1 Việt Nam</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Giao dịch{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                An toàn Tuyệt đối
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              EscrowVN giữ tiền của bạn bằng tấm khiên Aegis. Người bán chỉ nhận được thanh toán 
              khi bạn đã <strong className="text-foreground">hoàn toàn hài lòng</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/auth" 
                className="btn-primary px-8 py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Bắt đầu Giao dịch An toàn
              </Link>
              <button className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-1" weight="fill" />
                </div>
                Xem cách hoạt động
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" weight="fill" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" weight="fill" />
                <span>SSL 256-bit Encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" weight="fill" />
                <span>KYC/AML Verified</span>
              </div>
            </div>
          </div>

          {/* Right Graphic */}
          <div className="flex justify-center items-center">
            <div 
              ref={shieldRef}
              className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]"
            >
              {/* Main Shield Container */}
              <div className="absolute inset-0 glass-card rounded-full flex items-center justify-center group hover:scale-105 transition-all duration-500">
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                <div className="absolute inset-4 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Central Shield */}
                <div className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                  <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-white" weight="fill" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-float">
                  <span className="text-xs font-bold">₫</span>
                </div>
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <CheckCircle className="w-5 h-5 text-green-400" weight="fill" />
                </div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/4 right-4 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-20 glass-panel rounded-2xl p-6">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground font-medium">Được tin cậy bởi & Bảo mật bởi</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Payment Partners */}
            <div className="trust-indicator flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="text-sm font-medium">Momo</span>
            </div>
            <div className="trust-indicator flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
              <span className="text-sm font-medium">ZaloPay</span>
            </div>
            <div className="trust-indicator flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-sm font-medium">VNPay</span>
            </div>
            
            {/* Security Badges */}
            <div className="w-px h-8 bg-border"></div>
            <div className="trust-indicator text-sm font-medium">PCI DSS</div>
            <div className="trust-indicator text-sm font-medium">SSL 256-bit</div>
            <div className="trust-indicator text-sm font-medium">KYC/AML</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

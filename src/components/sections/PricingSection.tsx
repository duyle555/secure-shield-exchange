import React from 'react';
import { CheckCircle } from 'phosphor-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const benefits = [
  "Bảo vệ người mua 100%",
  "Bảo vệ người bán toàn diện", 
  "Hỗ trợ 24/7 không ngừng nghỉ",
  "Giải quyết tranh chấp chuyên nghiệp",
  "Không phí ẩn, minh bạch tuyệt đối",
  "Thanh toán nhanh chóng sau xác nhận"
];

const PricingSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-dark-background/50 relative overflow-hidden section-fade-in">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header - Mobile-First Typography */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tight">
            Một mức phí duy nhất,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hoàn toàn minh bạch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed font-light opacity-80 px-4 sm:px-0">
            Không có phí ẩn, không có bất ngờ. Chỉ một mức phí công bằng cho sự an toàn tuyệt đối.
          </p>
        </div>

        {/* Pricing Card - Mobile-First */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-3xl text-center relative overflow-hidden border-2 border-primary/30 active:scale-95 md:hover:scale-105 transition-all duration-300 group">
            {/* Premium Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-primary to-accent px-4 sm:px-6 py-2 rounded-full text-white font-bold text-xs sm:text-sm">
                ƯU ĐÃI RA MẮT
              </div>
            </div>

            {/* Pricing - Mobile Responsive */}
            <div className="mb-8 lg:mb-12">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark-text mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  2.5%
                </span>
              </div>
              <div className="text-xl sm:text-2xl text-dark-subtle mb-2">Phí giao dịch</div>
              <div className="text-base sm:text-lg text-dark-subtle px-2 sm:px-0">
                Áp dụng cho mọi giao dịch, không phân biệt giá trị
              </div>
            </div>

            {/* Benefits Grid - Mobile-First */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left min-h-[44px] p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" weight="light" />
                  <span className="text-dark-text text-base sm:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Example Calculation - Mobile Optimized */}
            <div className="bg-white/5 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-dark-text mb-4">Ví dụ tính phí:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">10 triệu VNĐ</div>
                  <div className="text-dark-subtle text-sm sm:text-base">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 250,000 VNĐ</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">50 triệu VNĐ</div>
                  <div className="text-dark-subtle text-sm sm:text-base">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 1,250,000 VNĐ</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">100 triệu VNĐ</div>
                  <div className="text-dark-subtle text-sm sm:text-base">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 2,500,000 VNĐ</div>
                </div>
              </div>
            </div>

            {/* CTA Button - Enhanced Touch Target */}
            <button className="btn-primary px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold text-white rounded-2xl shadow-glow-primary active:scale-95 md:hover:shadow-glow-primary-strong transition-all duration-300 min-h-[44px] min-w-[200px]">
              Bắt đầu Giao dịch Ngay
            </button>

            {/* Note */}
            <p className="text-dark-subtle mt-6 text-xs sm:text-sm px-4 sm:px-0">
              * Phí chỉ được thu khi giao dịch hoàn tất thành công
            </p>

            {/* Active Effect Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-active:scale-x-100 md:group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import React from 'react';
import { CheckCircle } from 'phosphor-react';

const benefits = [
  "Bảo vệ người mua 100%",
  "Bảo vệ người bán toàn diện", 
  "Hỗ trợ 24/7 không ngừng nghỉ",
  "Giải quyết tranh chấp chuyên nghiệp",
  "Không phí ẩn, minh bạch tuyệt đối",
  "Thanh toán nhanh chóng sau xác nhận"
];

const PricingSection = () => {
  return (
    <section className="py-32 bg-dark-background/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tighter">
            Một mức phí duy nhất,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hoàn toàn minh bạch
            </span>
          </h2>
          <p className="text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed">
            Không có phí ẩn, không có bất ngờ. Chỉ một mức phí công bằng cho sự an toàn tuyệt đối.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden border-2 border-primary/30">
            {/* Premium Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full text-white font-bold text-sm">
                ƯU ĐÃI RA MẮT
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-12">
              <div className="text-7xl font-bold text-dark-text mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  2.5%
                </span>
              </div>
              <div className="text-2xl text-dark-subtle mb-2">Phí giao dịch</div>
              <div className="text-lg text-dark-subtle">
                Áp dụng cho mọi giao dịch, không phân biệt giá trị
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" weight="fill" />
                  <span className="text-dark-text text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Example Calculation */}
            <div className="bg-white/5 rounded-2xl p-8 mb-8">
              <h4 className="text-xl font-bold text-dark-text mb-4">Ví dụ tính phí:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">10 triệu VNĐ</div>
                  <div className="text-dark-subtle">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 250,000 VNĐ</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50 triệu VNĐ</div>
                  <div className="text-dark-subtle">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 1,250,000 VNĐ</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100 triệu VNĐ</div>
                  <div className="text-dark-subtle">Giá trị giao dịch</div>
                  <div className="text-sm text-accent mt-1">Phí: 2,500,000 VNĐ</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="btn-primary px-12 py-4 text-xl font-bold text-white rounded-2xl shadow-glow-primary hover:shadow-glow-primary-strong transition-all duration-300">
              Bắt đầu Giao dịch Ngay
            </button>

            {/* Note */}
            <p className="text-dark-subtle mt-6 text-sm">
              * Phí chỉ được thu khi giao dịch hoàn tất thành công
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
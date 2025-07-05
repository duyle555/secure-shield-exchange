import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { 
  Target,
  CheckCircle,
  Scales,
  Medal
} from 'phosphor-react';

const features = [
  {
    icon: Target,
    title: "Thanh toán theo Cột mốc",
    description: "Chia nhỏ giao dịch lớn thành các cột mốc, thanh toán từng phần khi hoàn thành từng giai đoạn."
  },
  {
    icon: CheckCircle,
    title: "Digital Đồng kiểm",
    description: "Hệ thống xác thực kỹ thuật số tự động, đảm bảo chất lượng sản phẩm/dịch vụ trước khi giải ngân."
  },
  {
    icon: Scales,
    title: "Giải quyết Tranh chấp Minh bạch",
    description: "Quy trình hòa giải công bằng với bằng chứng được lưu trữ an toàn trên blockchain."
  },
  {
    icon: Medal,
    title: "Hệ thống Uy tín",
    description: "Xếp hạng độ tin cậy dựa trên lịch sử giao dịch, giúp tạo môi trường thương mại đáng tin cậy."
  }
];

const FeaturesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-dark-background/50 relative overflow-hidden section-fade-in">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header - Mobile-First Typography */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tight">
            Tính năng{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nổi bật
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed font-light opacity-80 px-4 sm:px-0">
            Công nghệ tiên tiến, được thiết kế để bảo vệ mọi giao dịch của bạn
          </p>
        </div>

        {/* Features Grid - Mobile-First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl group active:scale-95 md:hover:scale-105 transition-all duration-300 relative overflow-hidden min-h-[200px]"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-active:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon - Enhanced Touch Target */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-active:scale-95 md:group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" weight="light" />
                </div>

                {/* Content - Mobile Optimized */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-text">{feature.title}</h3>
                <p className="text-dark-subtle leading-relaxed text-base sm:text-lg font-light opacity-90">{feature.description}</p>

                {/* Active Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-active:scale-x-100 md:group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Enhanced Touch Target */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-dark-subtle mb-6 text-base sm:text-lg px-4 sm:px-0">
            Sẵn sàng trải nghiệm giao dịch an toàn tuyệt đối?
          </p>
          <button className="btn-primary px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-glow-primary active:scale-95 md:hover:shadow-glow-primary-strong transition-all duration-300 min-h-[44px] min-w-[180px]">
            Khám phá ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
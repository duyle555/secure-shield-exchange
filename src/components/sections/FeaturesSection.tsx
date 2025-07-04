import React from 'react';
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
  return (
    <section className="py-32 bg-dark-background/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tighter">
            Tính năng{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nổi bật
            </span>
          </h2>
          <p className="text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed">
            Công nghệ tiên tiến, được thiết kế để bảo vệ mọi giao dịch của bạn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" weight="light" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-dark-text">{feature.title}</h3>
                <p className="text-dark-subtle leading-relaxed text-lg">{feature.description}</p>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-dark-subtle mb-6 text-lg">
            Sẵn sàng trải nghiệm giao dịch an toàn tuyệt đối?
          </p>
          <button className="btn-primary px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-glow-primary hover:shadow-glow-primary-strong transition-all duration-300">
            Khám phá ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
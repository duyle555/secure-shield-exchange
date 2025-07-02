
import React, { useEffect, useRef, useState } from 'react';
import { 
  PenNib, 
  ShieldCheck, 
  Package, 
  CurrencyCircleDollar 
} from 'phosphor-react';

const steps = [
  {
    icon: PenNib,
    title: "Tạo Giao dịch",
    description: "Tạo hợp đồng với thông tin chi tiết, giá cả và thời hạn kiểm tra rõ ràng."
  },
  {
    icon: ShieldCheck,
    title: "Nạp tiền vào Khiên Aegis",
    description: "Người mua nạp tiền vào tài khoản escrow được bảo vệ tuyệt đối bởi EscrowVN."
  },
  {
    icon: Package,
    title: "Nhận & Kiểm tra hàng",
    description: "Người mua nhận hàng và có thời gian kiểm tra trong khung thời gian đã thỏa thuận."
  },
  {
    icon: CurrencyCircleDollar,
    title: "Hoàn tất & Giải ngân",
    description: "Sau khi xác nhận hài lòng, tiền được tự động chuyển cho người bán. Giao dịch hoàn tất."
  }
];

const HowItWorksSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139, 92, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-panel rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Quy trình 4 bước đơn giản</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Hoạt động như{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              thế nào?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quy trình bảo mật 5 lớp của chúng tôi đảm bảo an toàn tuyệt đối cho cả người mua và người bán 
            trong suốt toàn bộ giao dịch
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className={`
                glass-card p-8 h-full text-center rounded-2xl relative transition-all duration-700 transform hover:scale-105 hover:shadow-2xl group
                ${visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}>
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-white border-4 border-background shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" weight="duotone" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Sẵn sàng trải nghiệm?</h3>
            <p className="text-muted-foreground mb-6">
              Tham gia hàng nghìn người dùng đã tin tướng EscrowVN cho các giao dịch an toàn của họ
            </p>
            <button className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              Tạo giao dịch đầu tiên
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

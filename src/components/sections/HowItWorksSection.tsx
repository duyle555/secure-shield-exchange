
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
    title: "Khởi tạo",
    description: "Xác lập điều khoản trong 30 giây với giao diện đơn giản, rõ ràng."
  },
  {
    icon: ShieldCheck,
    title: "Bảo vệ",
    description: "Người mua nạp tiền vào Khiên Aegis được bảo vệ tuyệt đối bởi công nghệ blockchain."
  },
  {
    icon: Package,
    title: "Kiểm tra",
    description: "Người mua nhận hàng và có 48 giờ kiểm tra chất lượng trong khung thời gian an toàn."
  },
  {
    icon: CurrencyCircleDollar,
    title: "Hoàn tất",
    description: "Xác nhận hài lòng, người bán nhận tiền ngay lập tức. Giao dịch minh bạch hoàn toàn."
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
            // Animate cards one by one with staggered delay
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 300);
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
    <section ref={sectionRef} className="py-32 bg-dark-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147, 114, 255) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tighter">
            Hoạt động như{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              thế nào?
            </span>
          </h2>
          
          <p className="text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed">
            Quy trình bảo mật 4 bước đơn giản nhưng mạnh mẽ, được thiết kế để đảm bảo 
            an toàn tuyệt đối cho mọi giao dịch
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-dark-background shadow-glow-primary z-10"></div>
                
                {/* Step Card */}
                <div className={`
                  flex items-center
                  ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}
                `}>
                  <div className="w-1/2"></div>
                  <div className={`
                    w-1/2 
                    ${index % 2 === 0 ? 'pr-12' : 'pl-12'}
                    transition-all duration-700 transform
                    ${visibleCards.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`
                    }
                  `}>
                    <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
                      {/* Step Number */}
                      <div className={`
                        text-sm font-bold text-primary mb-2
                        ${index % 2 === 0 ? 'text-right' : 'text-left'}
                      `}>
                        Bước {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`
                        mb-6 flex
                        ${index % 2 === 0 ? 'justify-end' : 'justify-start'}
                      `}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-8 h-8 text-primary" weight="duotone" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-4 text-dark-text">{step.title}</h3>
                      <p className="text-dark-subtle leading-relaxed text-lg">{step.description}</p>

                      {/* Hover Effect Indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

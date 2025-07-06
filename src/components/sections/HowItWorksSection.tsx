
import React, { useEffect, useRef, useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
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
  const sectionRef = useScrollAnimation();

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
    <section ref={sectionRef} className="py-32 bg-dark-background relative overflow-hidden section-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147, 114, 255) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header - Mobile-First Typography */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tight">
            Hoạt động như{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              thế nào?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed font-light opacity-80 px-4 sm:px-0">
            Quy trình bảo mật 4 bước đơn giản nhưng mạnh mẽ, được thiết kế để đảm bảo
            an toàn tuyệt đối cho mọi giao dịch
          </p>
        </div>

        {/* Perfect Grid Timeline Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Single Column */}
          <div className="block lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className={`
                transition-all duration-700 transform
                ${visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}>
                <div className="glass-card p-6 sm:p-8 rounded-2xl group active:scale-95 transition-all duration-300">
                  {/* Step Number */}
                  <div className="text-sm font-bold text-primary mb-4">
                    Bước {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-active:scale-95 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" weight="light" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-dark-text text-center">{step.title}</h3>
                  <p className="text-dark-subtle leading-relaxed text-base sm:text-lg font-light opacity-90 text-center">{step.description}</p>

                  {/* Active Effect Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Perfect CSS Grid Layout */}
          <div className="hidden lg:block relative">
            {/* Central Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
            
            {/* CSS Grid Container */}
            <div className="grid grid-cols-2 gap-x-20 gap-y-24 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot with Enhanced Glow Effect */}
                  <div className="absolute top-8 z-20" style={{
                    left: index % 2 === 0 ? 'calc(100% + 2.5rem)' : 'calc(-2.5rem - 1.5rem)',
                  }}>
                    <div className="relative w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-dark-background">
                      {/* Main pulse glow */}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      
                      {/* Secondary pulse glow */}
                      <span className="animate-pulse absolute inline-flex h-8 w-8 -top-1 -left-1 rounded-full bg-accent/30 blur-sm"></span>
                      
                      {/* Outer glow ring */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse"></div>
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className={`
                    ${index % 2 === 0 ? 'col-start-1 text-right' : 'col-start-2 text-left'}
                    transition-all duration-700 transform
                    ${visibleCards.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`
                    }
                  `}>
                    <div className="glass-card p-8 rounded-2xl group hover:scale-105 hover:shadow-glow-primary/20 transition-all duration-300 relative overflow-hidden">
                      {/* Step Number */}
                      <div className={`
                        text-sm font-bold text-primary mb-4
                        ${index % 2 === 0 ? 'text-right' : 'text-left'}
                      `}>
                        Bước {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`
                        mb-6 flex
                        ${index % 2 === 0 ? 'justify-end' : 'justify-start'}
                      `}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                          <step.icon className="w-8 h-8 text-primary" weight="light" />
                          
                          {/* Icon glow effect on hover */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-4 text-dark-text">{step.title}</h3>
                      <p className="text-dark-subtle leading-relaxed text-lg font-light opacity-90">{step.description}</p>

                      {/* Hover Effect Indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                      
                      {/* Card glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

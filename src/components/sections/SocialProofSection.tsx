
import React from 'react';
import Marquee from "react-fast-marquee";
import useScrollAnimation from '@/hooks/useScrollAnimation';

const partners = [
  { name: 'Vietcombank', logo: 'https://haitrieu.com/wp-content/uploads/2022/02/Logo-Vietcombank-VCB.png', color: '#007A33' },
  { name: 'Techcombank', logo: 'https://haitrieu.com/wp-content/uploads/2022/02/Logo-Techcombank-TCB.png', color: '#E30613' },
  { name: 'BIDV', logo: 'https://haitrieu.com/wp-content/uploads/2022/02/Logo-BIDV.png', color: '#003DA5' },
  { name: 'ACB', logo: 'https://haitrieu.com/wp-content/uploads/2022/02/Logo-ACB.png', color: '#1E3A8A' },
  { name: 'MB Bank', logo: 'https://haitrieu.com/wp-content/uploads/2022/02/Logo-MBBank-MBB.png', color: '#FFA500' },
  { name: 'Momo', logo: 'https://developers.momo.vn/v3/assets/images/square-logo.svg', color: '#A50064' },
  { name: 'ZaloPay', logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png', color: '#0068FF' },
  { name: 'VNPay', logo: 'https://vnpay.vn/s1/statics.vnpay.vn/2023/6/0oxhzjmxbksr1686814746087.png', color: '#1976D2' },
  { name: 'ShopeePay', logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ShopeePay-Square.png', color: '#EE4D2D' },
];

const SocialProofSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-dark-background/50 overflow-hidden section-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-var(--color-text-secondary) mb-12 font-light opacity-80">
            Hỗ trợ Thanh toán qua Hầu hết Ngân hàng & Ví điện tử
        </h3>
        
        {/* Professional Marquee with React Fast Marquee */}
        <div className="py-8">
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 min-w-[180px] h-20"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} - Thanh toán an toàn`}
                  className="h-10 w-auto object-contain filter brightness-110 contrast-110"
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-dark-subtle">Thời gian Hoạt động</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-accent mb-2">10 tỷ+</div>
            <div className="text-dark-subtle">Giá trị Giao dịch Bảo vệ</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-dark-subtle">Người dùng Tin cậy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;


import React from 'react';
import Marquee from "react-fast-marquee";
import useScrollAnimation from '@/hooks/useScrollAnimation';

const partners = [
  { name: 'Vietcombank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Vietcombank_logo_fixed.svg/2560px-Vietcombank_logo_fixed.svg.png', color: '#007A33' },
  { name: 'Techcombank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Techcombank_logo.png/1280px-Techcombank_logo.png', color: '#E30613' },
  { name: 'BIDV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png', color: '#003DA5' },
  { name: 'ACB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Asia_Commercial_Bank_logo.svg/2560px-Asia_Commercial_Bank_logo.svg.png', color: '#1E3A8A' },
  { name: 'MB Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/MB_Bank_logo.svg/2560px-MB_Bank_logo.svg.png', color: '#FFA500' },
  { name: 'Momo', logo: 'https://developers.momo.vn/v3/img/logo.svg', color: '#A50064' },
  { name: 'ZaloPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/ZaloPay_Logo.svg/2560px-ZaloPay_Logo.svg.png', color: '#0068FF' },
  { name: 'VNPay', logo: 'https://vnpay.vn/assets/images/logo-vnpay-pj.png', color: '#1976D2' },
  { name: 'ShopeePay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ShopeePay_logo.svg/2560px-ShopeePay_logo.svg.png', color: '#EE4D2D' },
];

const SocialProofSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-dark-background/50 overflow-hidden section-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-var(--color-text-secondary) mb-12 font-light opacity-80">
            Hỗ trợ Thanh toán qua Hầu hết Ngân hàng & Ví điện tử
        </h3>
        
        {/* Professional Marquee with Official Partner Logos */}
        <div className="py-8">
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="mx-12 flex items-center justify-center h-16"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} - Thanh toán an toàn`}
                  className="max-h-12 w-auto object-contain transition-all duration-300 hover:scale-110 filter brightness-100 contrast-100"
                  style={{ maxWidth: '160px' }}
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

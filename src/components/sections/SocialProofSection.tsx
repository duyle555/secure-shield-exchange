
import React from 'react';
import Marquee from "react-fast-marquee";
import useScrollAnimation from '@/hooks/useScrollAnimation';

const partners = [
  { name: 'Vietcombank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Vietcombank_logo_fixed.svg/461px-Vietcombank_logo_fixed.svg.png', color: '#007A33' },
  { name: 'Techcombank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Techcombank_logo.png/1280px-Techcombank_logo.png', color: '#E30613' },
  { name: 'BIDV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/512px-Logo_BIDV.svg.png?20220815121139', color: '#003DA5' },
  { name: 'ACB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asia_Commercial_Bank_logo.svg/407px-Asia_Commercial_Bank_logo.svg.png', color: '#1E3A8A' },
  { name: 'MB Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Logo_MB_new.png/960px-Logo_MB_new.png', color: '#FFA500' },
  { name: 'Momo', logo: 'https://developers.momo.vn/v3/img/logo.svg', color: '#A50064' },
  { name: 'ZaloPay', logo: 'https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png?20200515043603', color: '#0068FF' },
  { name: 'VNPay', logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1-300x96.png', color: '#1976D2' },
  { name: 'ShopeePay', logo: 'https://lh5.googleusercontent.com/proxy/P6cwQUtRy36e0-s5ppWXMffXR083b4bYp35M2HzR5b9DLcDlaRgMEX5R7QFGs_fGdZm-v0kzoJKWTuWZqdhrEbMnB1u_bbBOU_s5CWv2153iOKeXxj4xujcE5grV9FYNVwHDeul_kg', color: '#EE4D2D' },
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

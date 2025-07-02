
import React from 'react';

const partners = [
  { name: 'Vietcombank', logo: '/logos/vietcombank-logo.svg', initial: 'VCB' },
  { name: 'Techcombank', logo: '/logos/techcombank-logo.svg', initial: 'TCB' },
  { name: 'BIDV', logo: '/logos/bidv-logo.svg', initial: 'BIDV' },
  { name: 'MB Bank', logo: '/logos/mb-logo.svg', initial: 'MB' },
  { name: 'ACB', logo: '/logos/acb-logo.svg', initial: 'ACB' },
  { name: 'Momo', logo: '/logos/momo-logo.svg', initial: 'M' },
  { name: 'ZaloPay', logo: '/logos/zalopay-logo.svg', initial: 'Z' },
  { name: 'VNPay', logo: '/logos/vnpay-logo.svg', initial: 'V' },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-background/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-dark-subtle mb-12">
          Hỗ trợ Thanh toán qua Hầu hết Ngân hàng & Ví điện tử
        </h3>
        
        {/* Animated Marquee */}
        <div className="marquee-container">
          <div className="marquee-content flex items-center gap-16">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 flex-shrink-0 hover:scale-110">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 text-xs font-bold">{partner.initial}</span>
                </div>
                <span className="text-gray-700 dark:text-dark-text font-medium whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 flex-shrink-0 hover:scale-110">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 text-xs font-bold">{partner.initial}</span>
                </div>
                <span className="text-gray-700 dark:text-dark-text font-medium whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
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


import React from 'react';

const partners = [
  { name: 'Momo', color: 'from-pink-500 to-red-500', initial: 'M' },
  { name: 'ZaloPay', color: 'from-blue-500 to-cyan-500', initial: 'Z' },
  { name: 'VNPay', color: 'from-orange-500 to-red-500', initial: 'V' },
  { name: 'Vietcombank', color: 'from-green-500 to-emerald-500', initial: 'VCB' },
  { name: 'Techcombank', color: 'from-blue-600 to-purple-600', initial: 'TCB' },
  { name: 'BIDV', color: 'from-blue-500 to-green-500', initial: 'BIDV' },
  { name: 'MB Bank', color: 'from-green-600 to-blue-600', initial: 'MB' },
  { name: 'ACB', color: 'from-purple-500 to-pink-500', initial: 'ACB' },
];

const certifications = [
  'PCI DSS Compliant',
  'SSL 256-bit Encryption', 
  'KYC/AML Verified',
  'ISO 27001 Certified',
  'SOC 2 Type II',
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-dark-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-dark-subtle font-medium text-lg mb-8">
            Được tin cậy bởi & Bảo mật bởi
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="marquee-container mb-8">
          <div className="marquee-content flex items-center space-x-12">
            {/* Duplicate the partners array to create seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xs font-bold">{partner.initial}</span>
                </div>
                <span className="text-dark-text font-medium whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full shadow-glow-primary"></div>
              <span className="text-dark-subtle text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-dark-subtle">Uptime Guarantee</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-accent mb-2">$10M+</div>
            <div className="text-dark-subtle">Protected Transactions</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-dark-subtle">Trusted Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

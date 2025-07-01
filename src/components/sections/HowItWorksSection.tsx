
import React from 'react';
import { 
  Handshake, 
  CreditCard, 
  Package, 
  Eye, 
  CheckCircle 
} from 'phosphor-react';

const steps = [
  {
    icon: Handshake,
    title: "Agreement & Setup",
    description: "Buyer and seller agree on terms. Create transaction with details, price, and timeline."
  },
  {
    icon: CreditCard,
    title: "Fund Escrow",
    description: "Buyer securely deposits funds into Aegis escrow account for complete protection."
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Seller delivers goods or services after receiving escrow confirmation."
  },
  {
    icon: Eye,
    title: "Inspection",
    description: "Buyer inspects and approves delivery during the agreed inspection period."
  },
  {
    icon: CheckCircle,
    title: "Release Funds",
    description: "Upon approval, funds are automatically released to seller. Transaction complete."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate="fadeInUpBlur">
          <h2 className="text-4xl font-bold mb-4">How Aegis Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our secure five-step process protects both buyers and sellers throughout every transaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative" data-animate="staggered">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="glass-card text-center p-6 h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connection Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 opacity-50"></div>
              )}

              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white border-4 border-gray-900">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

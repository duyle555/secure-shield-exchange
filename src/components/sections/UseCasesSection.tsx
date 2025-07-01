
import React from 'react';
import { 
  Globe, 
  Palette, 
  Code, 
  Car, 
  Diamond, 
  Monitor 
} from 'phosphor-react';

const useCases = [
  {
    icon: Globe,
    title: "Domain Sales",
    description: "Secure high-value domain transactions with verified ownership transfer",
    example: "$50K - $500K+",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Palette,
    title: "NFTs & Digital Art",
    description: "Protect collectors and creators in high-value digital asset sales",
    example: "$1K - $100K+",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Code,
    title: "Software & IP",
    description: "License enterprise software and source code with milestone payments",
    example: "$5K - $250K+",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: Car,
    title: "Luxury Vehicles",
    description: "Classic cars, supercars, and specialty vehicles with inspection periods",
    example: "$25K - $1M+",
    color: "from-orange-600 to-red-600"
  },
  {
    icon: Diamond,
    title: "Jewelry & Watches",
    description: "High-end timepieces and jewelry with authenticity verification",
    example: "$2K - $100K+",
    color: "from-yellow-600 to-amber-600"
  },
  {
    icon: Monitor,
    title: "Electronics",
    description: "Professional equipment, rare tech, and custom computer builds",
    example: "$500 - $50K+",
    color: "from-indigo-600 to-blue-600"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate="fadeInUpBlur">
          <h2 className="text-4xl font-bold mb-4">Perfect for High-Value Transactions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Aegis specializes in securing transactions where trust and verification are paramount
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="staggered">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card group cursor-pointer">
              <div className="mb-4 flex items-center justify-between">
                <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-400">{useCase.example}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                {useCase.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-panel inline-block">
            <p className="text-lg font-medium mb-2">Ready to secure your transaction?</p>
            <p className="text-gray-400 mb-4">Join thousands who trust Aegis with their high-value deals</p>
            <a href="/register" className="btn-primary">
              Start Your First Transaction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

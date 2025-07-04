
import React, { useEffect } from 'react';
import EscrowHeader from '@/components/EscrowHeader';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MissionSection from '@/components/sections/MissionSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set initial theme to dark mode as the primary experience
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-background text-dark-text">
      <EscrowHeader />
      
      <main>
        <HeroSection />
        <SocialProofSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MissionSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;


import React, { useEffect } from 'react';
import EscrowHeader from '@/components/AegisHeader';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
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
        <HowItWorksSection />
        <UseCasesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

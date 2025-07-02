
import React, { useEffect } from 'react';
import AegisHeader from '@/components/AegisHeader';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import UseCasesSection from '@/components/sections/UseCasesSection';

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
      <AegisHeader />
      
      <main>
        <HeroSection />
        <SocialProofSection />
        <HowItWorksSection />
        <UseCasesSection />
      </main>
    </div>
  );
};

export default Index;

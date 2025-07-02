
import React, { useEffect } from 'react';
import AegisHeader from '@/components/AegisHeader';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import UseCasesSection from '@/components/sections/UseCasesSection';

const Index = () => {
  useEffect(() => {
    // Set initial theme based on user preference
    if (!localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AegisHeader />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <UseCasesSection />
      </main>
    </div>
  );
};

export default Index;


import React, { useEffect } from 'react';
import AegisHeader from '@/components/AegisHeader';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import { initializeAnimations } from '@/components/animations/AnimationLibrary';
import '../styles/glassmorphic.css';

const Index = () => {
  useEffect(() => {
    // Initialize animations after component mounts
    const timer = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
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

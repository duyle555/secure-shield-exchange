import React, { useEffect, useRef } from 'react';

const usePageLoadAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add fade-in-up class to all children
    const children = container.querySelectorAll('.fade-in-up');
    
    // Stagger animation
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('animate');
      }, 100 + index * 100);
    });
  }, []);

  return containerRef;
};

export default usePageLoadAnimation;
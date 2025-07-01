
// GSAP Animation Lexicon for Aegis Platform

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animate = {
  fadeInUpBlur: (el: HTMLElement | string) => {
    return gsap.from(el, {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  },

  staggeredReveal: (elements: HTMLElement[] | string) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  },

  pulseGlow: (el: HTMLElement | string) => {
    return gsap.to(el, {
      boxShadow: '0 0 25px 5px var(--color-glow-primary)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut'
    });
  },

  buttonPressBounce: (button: HTMLElement) => {
    return gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power1.in'
    });
  },

  heroTextReveal: (headline: HTMLElement, subheadline: HTMLElement, ctas: HTMLElement) => {
    const tl = gsap.timeline();
    
    // Split text animation would require SplitText plugin (GSAP premium)
    // Using simpler character-by-character reveal
    tl.from(headline, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(subheadline, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .from(ctas, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

    return tl;
  },

  floatingElements: (elements: HTMLElement[] | string) => {
    return gsap.to(elements, {
      y: '-20px',
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });
  }
};

export const initializeAnimations = () => {
  // Auto-animate elements with data attributes
  document.querySelectorAll('[data-animate="fadeInUpBlur"]').forEach(el => {
    animate.fadeInUpBlur(el as HTMLElement);
  });

  document.querySelectorAll('[data-animate="staggered"]').forEach(container => {
    const children = container.querySelectorAll(':scope > *');
    animate.staggeredReveal(Array.from(children) as HTMLElement[]);
  });

  // Add button interactions
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
      animate.buttonPressBounce(btn as HTMLElement);
    });
  });
};

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { Button, LottieAnimation } from '@/components';
import { useLenis } from '@/hooks/useLenis';
import { useFontPreload } from '@/hooks/useFonts';
import MobileHeader from '@/components/ui/MobileHeader';

const Homepage: React.FC = () => {
  const router = useRouter();
  useLenis(); // Initialize smooth scrolling
  useFontPreload(); // Preload custom fonts

  useEffect(() => {
    // GSAP animations for homepage elements
    const tl = gsap.timeline();

    tl.fromTo('.hero-content',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo('.hexagon-container',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.cta-button',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleGetStarted = () => {
    router.push('/tutorial');
  };

  return (
    <main className="homepage-main">
      {/* Mobile Header */}
      <MobileHeader title="juicebox" />

      <div className="homepage-hero">
        <div className="homepage-hero-animation">
          {/* Lottie Animation */}
          <LottieAnimation
            path="/JB2G_Lottie.json"
            loop={true}
            autoplay={true}
            className="w-full h-full"
            onLoad={() => console.log('Lottie animation loaded')}
          />
        </div>

        <div className="homepage-hero-float-container">
          <div className="homepage-hero-float homepage-hero-float-1">WA businesses feel confident about future growth</div>
          <div className="homepage-hero-float homepage-hero-float-2">AI can&apos;t replace creativity</div>
          <div className="homepage-hero-float homepage-hero-float-3">Sales measure true success</div>
          <div className="homepage-hero-float homepage-hero-float-4">Human connection drives WA business</div>
          <div className="homepage-hero-float homepage-hero-float-5">The primary barrier to digital transformation is financial investment</div>
        </div>
      </div>

      {/* Title Section */}
      <div className="homepage-title-section">
        <h2 className="homepage-title">
          Compare your thoughts on{' '}
          <span className="homepage-title-gradient">technology</span>{' '}
          with current industry opinions.
        </h2>
      </div>

      {/* Button Section */}
      <div className="homepage-btn-section">
        <Button
          variant="primary"
          size="lg"
          onClick={handleGetStarted}
          className="homepage-btn"
          aria-label="Start the reality check"
        >
          <span className="homepage-btn-label">Get a reality check</span>
        </Button>
      </div>
    </main>
  );
};

export default Homepage;

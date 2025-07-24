'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { Button, LottieAnimation } from '@/components';
import { useFontPreload, FONTS } from '@/hooks/useFonts';
import MobileHeader from '@/components/ui/MobileHeader';

const TutorialPage: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  useFontPreload(); // Preload custom fonts

  const tutorialSlides = [
    {
      title: "Professionals around the world shared how they feel about technology and I've listened. Now it's your turn.",
    },
    {
      title: "I'll ask you a handful of meaningful questions and compare your responses with people in your industry.",
    },
    {
      title: "You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
    }
  ];

  useEffect(() => {
    // GSAP animation for slide changes
    gsap.fromTo('.slide-content',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < tutorialSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push('/form');
    }
  };




  return (
    <main className="tutorial-main">
      {/* Mobile Header */}
      <MobileHeader title="juicebox" showBack />

      {/* Main Content Area */}
      <div className="tutorial-hero">
        {/* Hexagon with Lottie Animation */}
        <div className="tutorial-hexagon">
          {/* Lottie Animation Background */}
          <div className="tutorial-hexagon-bg">
            <div className="tutorial-lottie">
              <LottieAnimation
                path="/JB2G_Lottie.json"
                loop={true}
                autoplay={true}
                className="w-full h-full"
                onLoad={() => console.log('Lottie animation loaded')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="tutorial-slide-section">
        <div className="tutorial-slide-content slide-content">
          <h2 className="tutorial-slide-title">
            {tutorialSlides[currentSlide].title}
          </h2>
        </div>
      </div>

      {/* Progress Dots and Next Button */}
      <div className="tutorial-progress-section">
        {/* Progress Dots */}
        <div className="tutorial-progress-dots">
          {tutorialSlides.map((_, index) => (
            <div
              key={index}
              className={`tutorial-progress-dot${index === currentSlide ? ' tutorial-progress-dot-active' : ''}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className="tutorial-btn-section">
          <Button
            variant="primary"
            onClick={handleNext}
            className={`tutorial-btn${currentSlide === tutorialSlides.length - 1 ? ' tutorial-btn-white' : ''}`}
            aria-label={currentSlide === tutorialSlides.length - 1 ? "Start form" : "Next slide"}
          >
            <span
              className={`tutorial-btn-label${currentSlide === tutorialSlides.length - 1 ? ' tutorial-btn-label-dark' : ''}`}
            >
              {currentSlide === tutorialSlides.length - 1 ? "Get Started" : "Continue"}
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default TutorialPage;

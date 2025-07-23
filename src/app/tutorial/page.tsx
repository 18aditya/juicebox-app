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

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      router.push('/');
    }
  };

  const handleSkip = () => {
    router.push('/form');
  };

  const progressPercentage = ((currentSlide + 1) / tutorialSlides.length) * 100;

  return (
    <main className="flex flex-col w-[390px] h-[844px] mx-auto overflow-hidden" style={{ 
      background: '#0C0D10',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Background Gradient */}
      <div 
        className="absolute w-[390px] h-[527px]"
        style={{
          background: 'radial-gradient(94.55% 94.55% at 50% 5.45%, #222737 0%, #0C0D10 100%)'
        }}
      />
      
      {/* Mobile Header */}
      <MobileHeader title="juicebox" showBack />

      {/* Main Content Area */}
      <div className="relative w-[390px] h-[346px] flex flex-col justify-center items-center py-7 px-5 gap-12">
        {/* Hexagon with Lottie Animation */}
        <div className="relative w-[274px] h-[290px]">
          {/* Lottie Animation Background */}
          <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
            <div className="w-[146px] h-[155px]">
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
      <div className="absolute flex flex-col justify-center items-center px-5 py-6 gap-4" style={{
        width: '390px',
        height: '150px',
        left: 'calc(50% - 390px/2 - 1px)',
        top: '457px'
      }}>
        <div className="slide-content text-center px-4 max-w-sm">
          <h2 
            className="text-center tracking-[0.01em] text-[#FAFAFA]"
            style={{
              width: '350px',
              height: '150px',
              fontFamily: 'Bagoss TRIAL',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '125%',
              textAlign: 'center',
              letterSpacing: '0.01em',
              color: '#FAFAFA',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0
            }}
          >
            {tutorialSlides[currentSlide].title}
          </h2>
        </div>
      </div>

      {/* Progress Dots and Next Button */}
      <div className="absolute flex flex-col items-center px-5 py-6" style={{
        width: '390px',
        height: '150px',
        left: '0px',
        bottom: '50px'
      }}>
        {/* Progress Dots */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {tutorialSlides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#CDAAFF]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="primary"
          onClick={handleNext}
          className="mx-auto"
          aria-label={currentSlide === tutorialSlides.length - 1 ? "Start form" : "Next slide"}
          style={{
            width: '350px',
            height: '60px',
            background: currentSlide === tutorialSlides.length - 1 ? '#FFFFFF':'none',
            border: '1px solid #FFFFFF',
            borderRadius: '19px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 0px',
            gap: '12px'
          }}
        >
          <span 
            style={{
              fontFamily: FONTS.SOHNE,
              fontSize: '16px',
              lineHeight: '135%',
              letterSpacing: '0.02em',
              color: currentSlide === tutorialSlides.length - 1 ? '#0C0D10':'#FAFAFA',
              fontWeight: 400
            }}
          >
            {currentSlide === tutorialSlides.length - 1 ? "Get Started" : "Continue"}
          </span>
        </Button>
      </div>
    </main>
  );
};

export default TutorialPage;

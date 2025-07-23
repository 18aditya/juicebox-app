'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import Image from 'next/image';
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
    <main
      className="flex flex-col items-center w-full max-w-[390px] h-screen mx-auto overflow-hidden bg-gradient-to-b from-[#222737] to-[#0C0D10] backdrop-blur-md md:max-w-2xl lg:max-w-4xl md:h-auto md:rounded-2xl md:shadow-lg md:my-8"
    >
      {/* Mobile Header */}
      <MobileHeader title="juicebox" />

      <div className="relative w-full max-w-[390px] md:max-w-2xl lg:max-w-4xl h-[346px] flex flex-col justify-center items-center py-7 px-5 md:px-10 gap-12 md:gap-16">
        <div className="w-full h-full flex items-center justify-center relative z-10" style={{ width: '350px', height: '350px' }}>
          {/* Lottie Animation */}
          <LottieAnimation
              path="/JB2G_Lottie.json"
              loop={true}
              autoplay={true}
              className="w-full h-full"
              onLoad={() => console.log('Lottie animation loaded')}
            />
       
        </div>

        <div className="absolute  w-full h-full inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div
            className="absolute text-white text-xs leading-[135%] tracking-[0.02em] "
            style={{
              fontFamily: 'Sohne',
              fontSize: '12px',
              left: '20px',
              top: '30px'
            }}
          >
            WA businesses feel confident about future growth
          </div>
          <div
            className="absolute text-white text-xs leading-[135%] tracking-[0.02em] text-center "
            style={{
              fontFamily: 'Sohne',
              fontSize: '12px',
              right: '20px',
              top: '80px'
            }}
          >
            AI can&apos;t replace creativity
          </div>
          <div
            className="absolute text-white text-xs leading-[135%] tracking-[0.02em] "
            style={{
              fontFamily: 'Sohne',
              fontSize: '12px',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            Sales measure true success
          </div>
          <div
            className="absolute text-white text-xs leading-[135%] tracking-[0.02em] text-center "
            style={{
              fontFamily: 'Sohne',
              fontSize: '12px',
              right: '10px',
              bottom: '60px'
            }}
          >
            Human connection drives WA business
          </div>
          <div
            className="absolute text-white text-xs leading-[135%] tracking-[0.02em] max-w-[236px]"
            style={{
              fontFamily: 'Sohne',
              fontSize: '12px',
              left: '10px',
              bottom: '20px'
            }}
          >
            The primary barrier to digital transformation is financial investment
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div
        className="absolute flex flex-col justify-center items-center px-5 py-6 gap-4"
        style={{
          width: '390px',
          height: '150px',
          left: 'calc(50% - 390px/2 - 1px)',
          top: '457px'
        }}
      >
        <h2
          className="w-[346px] h-[102px] text-center tracking-[0.01em] text-[#FAFAFA]"
          style={{
            fontFamily: 'Bagoss TRIAL',
            fontSize: '28px',
            lineHeight: '120%',
            fontWeight: 400
          }}
        >
          Compare your thoughts on{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FABBFF 0%, #B179FF 35%, #6DDDFF 83%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            technology
          </span>{' '}
          with current industry opinions.
        </h2>
      </div>

      {/* Button Section */}
      <div className="my-auto flex justify-center w-full pb-6">
        <Button
          variant="primary"
          size="lg"
          onClick={handleGetStarted}
          className="mx-auto"
          aria-label="Start the reality check"
          style={{
            width: '350px',
            height: '60px',
            background: '#CDAAFF',
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
              fontFamily: 'Sohne',
              fontSize: '16px',
              lineHeight: '135%',
              letterSpacing: '0.02em',
              color: '#0C0D10',
              fontWeight: 400
            }}
          >
            Get a reality check
          </span>
        </Button>
      </div>
    </main>
  );
};

export default Homepage;

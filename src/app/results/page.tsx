'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components';
import { gsap } from 'gsap';
import { useFontPreload, FONTS } from '@/hooks/useFonts';
import MobileHeader from '@/components/ui/MobileHeader';
import AITalks from '@/components/ui/AITalks';

const ResultsContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useFontPreload(); // Preload custom fonts
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });

  useEffect(() => {
    // Get form data from URL parameters
    const firstName = searchParams.get('firstName') || '';
    const email = searchParams.get('email') || '';

    if (!firstName || !email) {
      // If no form data, redirect to form page
      router.push('/form');
      return;
    }

    setFormData({ firstName, email });

    // GSAP animations for results page
    const tl = gsap.timeline();

    tl.fromTo('.results-content',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo('.hexagon-container',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.results-actions',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, [searchParams, router]);

  const handleContinue = () => {
    // In a real app, this would continue to the actual assessment
    alert('This would continue to the actual assessment questions');
  };

  return (
    <main
      className="flex flex-col w-full max-w-[390px] h-screen mx-auto overflow-hidden bg-gradient-to-b from-[#222737] to-[#0C0D10] backdrop-blur-md md:max-w-2xl lg:max-w-4xl md:h-auto md:rounded-2xl md:shadow-lg md:my-8"
    >
      {/* Mobile Header */}
      <MobileHeader title="juicebox" showBack />

      {/* AI Talks Container */}
      <AITalks
        title={`Thanks, ${formData.firstName}! Now, it's time to get a reality check.`}
        subtitle="This will take 2-3 minutes."
      />

      {/* Continue Button */}
      <div className="my-auto flex justify-center w-full pb-6">
        <Button
          variant="primary"
          onClick={handleContinue}
          className="mx-auto"
          aria-label="Continue to assessment"
          style={{
            width: '350px',
            height: '60px',
            background: '#FFFFFF',
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
              color: '#0C0D10',
              fontWeight: 400
            }}
          >
            Continue
          </span>
        </Button>
      </div>
    </main>
  );
};

const ResultsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <ResultsContent/>
      </div>
    </div>
  );
};

export default ResultsPage;

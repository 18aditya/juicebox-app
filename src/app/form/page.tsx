'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import {LottieAnimation, TextInput, Button } from '@/components';
import { validateEmail, validateName } from '@/utils/validation';
import { useFontPreload, FONTS } from '@/hooks/useFonts';
import MobileHeader from '@/components/ui/MobileHeader';
import AITalks from '@/components/ui/AITalks';

interface FormData {
  firstName: string;
  email: string;
}

const FormPage: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  useFontPreload();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      id: 'firstName',
      title: 'Let’s start with the basics. Type in your first name.',
      placeholder: 'First name',
      type: 'text' as const,
      validator: validateName,
    },
    {
      id: 'email',
      title: 'How should we contact you? Type in your email address.',
      placeholder: 'Email address',
      type: 'email' as const,
      validator: validateEmail,
    },
  ];

  const currentStepData = steps[currentStep];

  useEffect(() => {
    // GSAP animation for step changes
    gsap.fromTo('.step-content',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, [currentStep]);

  const handleInputChange = (value: string) => {
    const fieldName = currentStepData.id as keyof FormData;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: undefined
      }));
    }
  };

  const handleNext = () => {
    const fieldName = currentStepData.id as keyof FormData;
    const value = formData[fieldName];
    const error = currentStepData.validator(value);

    if (error) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: error
      }));
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/tutorial');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Navigate to results with form data
    const params = new URLSearchParams({
      firstName: formData.firstName,
      email: formData.email,
    });

    router.push(`/results?${params.toString()}`);
  };

  const handleKeyPress = () => {
    handleNext();
  };

  const currentValue = formData[currentStepData.id as keyof FormData];
  const currentError = errors[currentStepData.id as keyof FormData];

  return (
    <main
      className="flex flex-col w-full max-w-[390px] h-screen mx-auto overflow-hidden bg-gradient-to-b from-[#222737] to-[#0C0D10] backdrop-blur-md md:max-w-2xl lg:max-w-4xl md:h-auto md:rounded-2xl md:shadow-lg md:my-8"
    >
      <MobileHeader title="juicebox" showBack />
      {/* Main Content */}
      <div className="flex flex-col items-center h-full w-full flex-1 px-5 md:px-10 gap-8 md:gap-12">
        <AITalks
          title={currentStepData.title}
          subtitle="This will take 2-3 minutes."
        />
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <label htmlFor="form-input" className="sr-only">
            {currentStepData.placeholder}
          </label>
          <TextInput
            id="form-input"
            type={currentStepData.type}
            placeholder={currentStepData.placeholder}
            value={currentValue}
            onChange={(e) => handleInputChange(e.target.value)}
            onEnter={handleKeyPress}
            error={currentError}
            autoFocus
            disabled={isSubmitting}
            className="text-center text-lg md:text-xl bg-transparent border-0 border-b-0 focus:border-0 rounded-none px-0 py-4 w-full"
            style={{
              fontFamily: FONTS.SOHNE,
              fontSize: '16px',
              color: '#FAFAFA',
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default FormPage;

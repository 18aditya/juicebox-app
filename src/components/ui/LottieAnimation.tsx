'use client';

import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationData?: object;
  path?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onComplete?: () => void;
  onLoad?: () => void;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  path,
  loop = true,
  autoplay = true,
  className = '',
  onComplete,
  onLoad,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.destroy();
    }

    // Create new animation
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
      path,
    });

    // Event listeners
    if (onComplete) {
      animationRef.current.addEventListener('complete', onComplete);
    }

    if (onLoad) {
      animationRef.current.addEventListener('DOMLoaded', onLoad);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [animationData, path]); // Only re-initialize if animationData or path changes

  return (
    <div
      ref={containerRef}
      className={`lottie-container ${className}`}
      role="img"
      aria-label="Animation"
    />
  );
};

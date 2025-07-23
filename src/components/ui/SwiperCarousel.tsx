'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperCarouselProps {
  slides: React.ReactNode[];
  onSlideChange?: (activeIndex: number) => void;
  onReachEnd?: () => void;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  slides,
  onSlideChange,
  onReachEnd,
  autoplay = false,
  loop = false,
  className = '',
}) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    // Any additional Swiper setup can go here
  }, []);

  const handleSlideChange = (swiper: SwiperInstance) => {
    if (onSlideChange) {
      onSlideChange(swiper.activeIndex);
    }
  };

  const handleReachEnd = () => {
    if (onReachEnd) {
      onReachEnd();
    }
  };

  return (
    <div className={`swiper-container ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ 
          clickable: true,
          type: 'bullets',
        }}
        autoplay={autoplay ? { delay: 3000 } : false}
        loop={loop}
        onSlideChange={handleSlideChange}
        onReachEnd={handleReachEnd}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

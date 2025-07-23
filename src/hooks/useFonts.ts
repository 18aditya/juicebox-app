import { useEffect } from 'react';

/**
 * Hook to preload custom fonts for better performance
 */
export const useFontPreload = () => {
  useEffect(() => {
    // Preload critical fonts
    const fonts = [
      { url: '/fonts/BagossTRIALVF.ttf', format: 'truetype' },
      { url: '/fonts/Sohne-Buch.otf', format: 'opentype' },
      { url: '/fonts/PPAgrandir-Regular.woff2', format: 'woff2' },
      { url: '/fonts/PPAgrandir-Medium.woff2', format: 'woff2' },
    ];

    fonts.forEach(({ url, format }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = 'font';
      link.type = `font/${format}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);
};

/**
 * Font family constants for consistent usage
 */
export const FONTS = {
  BAGOSS: "'Bagoss TRIAL', -apple-system, BlinkMacSystemFont, sans-serif",
  SOHNE: "'Sohne', -apple-system, BlinkMacSystemFont, sans-serif",
  PP_AGRANDIR: "'PP Agrandir', -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

interface MobileHeaderProps {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  showBack?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title = 'juicebox', left, right, showBack }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="flex flex-row items-center justify-between w-full h-[86px] z-20 bg-transparent">
      <div className="w-[46px] h-[46px] flex items-center justify-center">
        {showBack ? (
          <button
            onClick={handleBack}
            className="w-[46px] h-[46px] flex items-center justify-center rounded-full"
            style={{
              border: 'none',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(60px)',
            }}
            aria-label="Go back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        ) : left}
      </div>
      <h1 className="text-lg font-medium text-white" style={{ fontFamily: 'Sohne' }}>{title}</h1>
      <div className="w-[46px] h-[46px] flex items-center justify-center">
        {right ? right : (
          <Button 
            className="w-[46px] h-[46px] flex items-center justify-center rounded-full"
            style={{
              border: 'none',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(60px)',
            }}
            aria-label="Settings"
          >
            <Image 
              src="/refresh.svg" 
              alt="Refresh" 
              width={20} 
              height={20}
              className="w-5 h-5"
            />
          </Button>
        )}
      </div>
    </header>
  );
};

export default MobileHeader; 
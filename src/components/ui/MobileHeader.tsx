import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface MobileHeaderProps {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  showBack?: boolean;
  style?: React.CSSProperties;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title = 'juicebox', left, right, showBack, style }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header style={{
      paddingInline: '20px',
    }}>
      <div className="mobile-header">
        <div className="mobile-header-btn-container">
          {showBack ? (
            <button
              onClick={handleBack}
              className="mobile-header-btn"
              aria-label="Go back"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="2" className="mobile-header-icon">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          ) : left}
        </div>
        <h1 className="mobile-header-title">{title}</h1>
        <div className="mobile-header-btn-container">
          {right ? right : (
            <button
              className="mobile-header-btn"
              aria-label="Settings"
            >
              <Image
                src="/refresh.svg"
                alt="Refresh"
                width={20}
                height={20}
                className="mobile-header-icon"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default MobileHeader; 
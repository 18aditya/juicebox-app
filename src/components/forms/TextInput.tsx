import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onEnter?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({ error, onEnter, ...props }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px 12px',
      maxWidth: '350px',
      height: '60px',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      borderRadius: '18px',
      alignSelf: 'stretch',
      margin: '0 auto', // <-- This centers the box horizontally
    }}>
      <input
        {...props}
        onKeyPress={handleKeyPress}
        className={props.className}
        style={{
          ...props.style,
        }}
      />
      
        <button
          type="button"
          onClick={onEnter}
          style={{
            margin: '0 auto',
            width: '31px',
            height: '31px',
            background: 'rgba(255, 255, 255, 0.6)',
            opacity: 0.5,
            borderRadius: '27px',
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            zIndex: 1,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Enter"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C0D10" strokeWidth="2" style={{ transform: 'rotate(-90deg)' }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
    </div>
  );
};
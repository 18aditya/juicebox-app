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
    <div className="text-input-container">
      <input
        {...props}
        onKeyPress={handleKeyPress}
        className={`text-input ${props.className || ''}`.trim()}
      />
      <button
        type="button"
        onClick={onEnter}
        className="text-input-btn"
        aria-label="Enter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C0D10" strokeWidth="2" className="text-input-btn-icon"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </div>
  );
};
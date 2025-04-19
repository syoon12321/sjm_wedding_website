import React from 'react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        style={{
          padding: '8px 16px',
          backgroundColor: 'transparent',
          color: '#554300',
          cursor: 'pointer',
          fontFamily: 'Open Sauce, sans-serif',
        }}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
};

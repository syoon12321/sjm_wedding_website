import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Soohyun Yoon and Manuel Pacheco</p>
        <p>This website has been approved by Hoonho Shin</p>
      </div>
    </footer>
  );
};

export default Footer;
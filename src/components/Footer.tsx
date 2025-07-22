import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="footer">
      <div className="footer-content">
        <h6>© 2025 Soohyun Yoon and Manuel Pacheco</h6>
        <h6>This website has been approved by Hoonho Shin</h6>
      </div>
    </footer>
  );
};

export default Footer;
// src/pages/RSVP.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import '../styles/styles.css';
import books from '../assets/clipart_books.png';

const RSVP: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].rsvp;

  return (
    <div className="main-section">
      <main>
        <h2>{t.title}</h2>
        <h4>{t.deadline}</h4>
          <a href='https://forms.gle/FgkxCaNEjx3LiZgM6' target="_blank" rel="noopener noreferrer">
            {t.rsvpLink}
          </a>
        <br></br>
        <img 
          src={books} 
          alt="pretty-art" 
          className='map-photo'
        />
        <p>{t.registry}</p>
          <a href='https://www.amazon.com/wedding/registry/2NJ8LMOWFT7O0' target="_blank" rel="noopener noreferrer">
            {t.registryLink}
          </a>
      </main>
    </div>
  );
};

export default RSVP;

import React, { useEffect, useState } from 'react'
import engagementPhoto from '../assets/engagement.jpg';
import { translations } from '../translations/translations';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="main-section">
      <main>
        <img 
            src={engagementPhoto} 
            alt="Engagement photo" 
            className="engagement-photo"
          />
        <h2>{t.names.first}</h2>
        <br></br>
        <p>+</p>
        <h2>{t.names.second}</h2>
        <br></br>
        <h6>{t.date}</h6>
        <h6>{t.location}</h6>
      </main>
    </div>
  );
};

export default Home;

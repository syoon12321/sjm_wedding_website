import React, { useEffect, useState } from 'react'
import engagementPhoto from '../assets/engagement.jpg';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="main-section" lang={language}>
      <main>
        <img 
            src={engagementPhoto} 
            alt="Engagement photo" 
            className="engagement-photo"
          />
        <h1>{t.names.first}</h1>
        <h1>&</h1>
        <h1>{t.names.second}</h1>
        <br></br>
        <h4>{t.date}</h4>
        <h4>{t.location}</h4>
      </main>
    </div>
  );
};

export default Home;

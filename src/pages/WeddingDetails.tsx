// src/pages/BigDay.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import gazebo from '../assets/clipart_gazebo.png';
import birdy from '../assets/clipart_birdy.png';
import butterfly from '../assets/clipart_butterfly.png';
import church from '../assets/clipart_church.png';
import tree from '../assets/clipart_tree.png';

const WeddingDetails: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].weddingDetails;

  return (
    <div className="main-section">
      <main>
        <h2>{t.title}</h2>
        <img 
          src={gazebo} 
          alt="pretty-art" 
          className='map-photo'
        />

        <h3>{t.date}</h3>
        <img 
          src={wedding_timeline} 
          alt="timeline" 
          className='map-photo'
        />
        <img 
          src={tree} 
          alt="pretty-art" 
          className='map-photo'
        />

        <h3>{t.venue.title}</h3>
        <p>{t.venue.name}</p>
        <p>{t.venue.address}</p>
        <p>{t.venue.city}</p>
        <br />
        <p>{t.venue.parking}</p>
        <br />

        <h3>{t.contact.title}</h3>
        <p>{t.contact.name}</p>
        <p>{t.contact.phone}</p>
        <br />

        <h3>{t.expectations.title}</h3>
        <p>{t.expectations.description}</p>
                
        <img 
          src={butterfly} 
          alt="pretty-art" 
          className='map-photo'
        />

        <h2>{t.faq.title}</h2>

        <h4>{t.faq.dressCode.question}</h4>
        <p>{t.faq.dressCode.answer}</p>
        <br />

        <h4>{t.faq.openBar.question}</h4>
        <p>{t.faq.openBar.answer}</p>
        <br />

        <h4>{t.faq.photos.question}</h4>
        <p>{t.faq.photos.answer}</p>
        
        <img 
          src={birdy} 
          alt="pretty-art" 
          className='map-photo'
        />

        <h2>{t.plans.title}</h2>
        <p>{t.plans.description}</p>
        <br />

        <h4>{t.plans.saturday.title}</h4>
        <p>{t.plans.saturday.event}</p>
        <img 
          src={church} 
          alt="pretty-art" 
          className='map-photo'
        />

        <h4>{t.plans.friday.title}</h4>
        <p>{t.plans.friday.events[0]}</p>
        <p>{t.plans.friday.events[1]}</p>
        <br />

        <h4>{t.plans.thursday.title}</h4>
        <p>{t.plans.thursday.event}</p>
        <br />

        <h4>{t.plans.before.title}</h4>
        <p>{t.plans.before.event}</p>

      </main>
    </div>
  );
};

export default WeddingDetails;

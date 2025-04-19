// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import headerImage from '../assets/website_header.png';
import { CountdownTimer } from './CountdownTimer';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function NavBar() {
  const { language, setLanguage } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const t = translations[language as keyof typeof translations];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <LanguageSelector 
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      <img 
        src={headerImage}
        alt="Website header"
        style={{
          width: '100%',
          maxHeight: '1000px',
          objectFit: 'cover',
          marginBottom: '20px',
          marginTop: '-1px',
          display: 'block'
        }}
      />
      <CountdownTimer />
      <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: 'transparent' }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {t.navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={item.href}
                    className={`nav-link ${selectedIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

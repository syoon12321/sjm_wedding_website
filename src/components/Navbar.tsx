// src/components/NavBar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import headerImage from '../assets/website_header.png';

interface NavBarProps {
  navItems: string[];
}

function NavBar({ navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Function to convert display text to URL path
  const toPath = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to dashes
  };

  return (
    <>
      <img 
        src={headerImage}
        alt="Website header"
        style={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          marginBottom: '-1px',
          marginTop: '-20px', // This helps eliminate any sub-pixel gaps
          display: 'block' // This removes any inline element spacing
        }}
      />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav-container">
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <li
                    key={item}
                    className="nav-item"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Link
                      className={
                        selectedIndex === index
                          ? "nav-link active fw-bold"
                          : "nav-link"
                      }
                      to={`/${toPath(item)}`} // Use formatted path
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

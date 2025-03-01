import React, { useEffect, useState } from 'react'
import engagementPhoto from '../assets/engagement_biking.jpg';

const Home: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00'
    });

    useEffect(() => {
        function updateCountdown() {
            const weddingDate = new Date('September 21, 2025').getTime();
            const now = new Date().getTime();
            const timeDiff = weddingDate - now;

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            setTimeLeft({
                days: days.toString().padStart(2, '0')
            });
        }

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
      <div className="home-page">
        <header>
          <h2>Soohyun + Jose Manuel</h2>
          <h2>invite you to their wedding</h2>
          <p>September 21, 2025</p>
          <p>The Skylight Chapel</p>
          <p>Upstate South Carolina</p>
          <div id="countdown" className="countdown">
              <div className="countdown-item">
                  <span id="days">{timeLeft.days}</span>
                  <span className="label"> Days to Go!</span>
              </div>
          </div>
        </header>
        <main>
          <img 
            src={engagementPhoto} 
            alt="Engagement photo - biking" 
            className="engagement-photo"
          />
          <section>
            <p>Here's our story</p>
          </section>
        </main>
      </div>
      
    );
  };
  
export default Home;

// src/pages/Travel.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import airports from '../assets/map_airports.001.jpeg';
import greerTaco from '../assets/Restaurant_barnyard_flea_market_taco.jpg';
import fallsPark from '../assets/Attraction_falls_park.jpg';
import parisMtn from '../assets/Attraction_paris_mountain.jpg';
import swampRabbit from '../assets/Attraction_swamp_rabbit_trail.jpg';
import kbbq from '../assets/Restaurant_Korean_BBQ_food2.jpg';
import farmersMarket from '../assets/events_Greenville_farmers_market.jpg';
import bmw from '../assets/Attraction_bmw_zentrum.jpg';
import thaiVegan from '../assets/Restaurant_thai_vegan.jpg';
import stPauls from '../assets/St_Paul.jpg';
import chinchorro from '../assets/chinchorro.png';
import wades from '../assets/Restaurant_Wades.jpg';
import woodruff from '../assets/Woodruff.jpg';

const Travel: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].travel;

  return (
    <div className="main-section">
      <h2>{t.greeting}</h2>
      <p>{t.intro}</p>

      <h3>{t.gettingHere.title}</h3>
      <h4>{t.gettingHere.airports.title}</h4>
      <img 
        src={airports} 
        alt="airport map" 
        className='map-photo'
      />
      <h6>{t.gettingHere.airports.mapCredit}</h6>
      {t.gettingHere.airports.options.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <div className='spacer'></div>

      <h4>{t.gettingHere.accommodations.title}</h4>
      <p>{t.gettingHere.accommodations.recommendation}</p>
      <p>{t.gettingHere.accommodations.bookingLink}</p>
      <a href='https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=GSPGGHX&corporateCode=0003318723' target="_blank" rel="noopener noreferrer">
        Hampton Inn Greer Greenville
      </a>
      <p>{t.gettingHere.accommodations.otherOptions}</p>
      <p>{t.gettingHere.accommodations.houseOffer}</p>
      <div className='spacer'></div>

      <h4>{t.gettingHere.transportation.title}</h4>
      <p>{t.gettingHere.transportation.mainForm}</p>
      <p>{t.gettingHere.transportation.options}</p>
      <div className='spacer'></div>

      <h2>Things to do</h2>
      <h3>Greenville</h3>

      <div className='gallery'>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={fallsPark} 
              alt="falls park" 
            />
          </div>
          <div className='photo-text'>
            <h5>Falls Park on the Reedy</h5>
            <p>Iconic Greenville tourist destination. Downtown is great for shopping, dining, and entertainment too.</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo right'>
            <img 
              src={farmersMarket} 
              alt="Greenville Farmers Market" 
            />
          </div>
          <div className='photo-text'>
            <h5>Greenville TD Farmer's Market</h5>
            <p>Saturday mornings in downtown Greenville</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={kbbq} 
              alt="Korean Restaurant" 
            />
          </div>
          <div className='photo-text'>
            <h5>Korean BBQ on Woodruff Rd</h5>
            <p>Korean food in SC exceeded expectations ^^</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo right'>
            <img 
              src={swampRabbit} 
              alt="Swamp Rabbit Trail" 
            />
          </div>
          <div className='photo-text'>
            <h5>Swamp Rabbit Cafe/Trail</h5>
            <p>Paved trails from Greenville to Traveler's Rest (also a very cute town). Stop by the cafe on the way there for bread and snacks</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={parisMtn} 
              alt="Paris Mountain" 
            />
          </div>
          <div className='photo-text'>
            <h5>Paris Mountain</h5>
            <p>We've only been there once, but it's nice</p>
          </div>
        </div>
      </div>
      <div className='spacer'></div>
        
      <h3>Greer</h3>
      <div className='gallery'>
        <div className='row'>
          <div className='travel-photo right'>
            <img 
                src={greerTaco} 
                alt="best tacos" 
              />
          </div>
          <div className='photo-text'>
            <h5>Greer Taco at Barnyard Flea Market</h5>
            <p>Open only Saturdays and Sundays from 9am to around 3pm, the best tacos we've found in this area yet</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={bmw} 
              alt="BMW Zentrum" 
            />
          </div>
          <div className='photo-text'>
            <h5>BMW Manufacturing Plant</h5>
            <p>Lots of cool BMWs on display in the museum and tours of the manufacturing floor on weekdays</p>
          </div>          
        </div>
        <div className='row'>
          <div className='travel-photo right'>
            <img 
              src={thaiVegan} 
              alt="heart rice" 
            />
          </div>
          <div className='photo-text'>
            <h5>Thai Vegan</h5>
            <p>Fully vegan menu, and their rice is served in the shape of a heart</p>
          </div>
        </div>
      </div>
      <h5>La Estrella Panaderia and Taqueria</h5>

      <div className='spacer'></div>

      <h3>Spartanburg</h3>

        <div className='gallery'>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={stPauls} 
              alt="St Paul's" 
            />
          </div>
          <div className='photo-text'>
            <h5>St. Paul the Apostle Catholic Church</h5>
            <p>Masses held Saturdays at 5PM and Sundays 8AM and 11AM. Our church wedding will be here Saturday, September 20 at 1PM</p>
          </div>          
        </div>
        <div className='row'>
          <div className='travel-photo right'>
            <img 
              src={chinchorro} 
              alt="Chinchorro photo" 
            />
          </div>
          <div className='photo-text'>
            <h5>El Chinchorro</h5>
            <p>They had handmade tortillas the first time we went! They serve tasty Mexican and Puerto Rican food.</p>
          </div>
        </div>
        <div className='row'>
          <div className='travel-photo left'>
            <img 
              src={wades} 
              alt="Wade's photo" 
            />
          </div>
          <div className='photo-text'>
            <h5>Wade's Restaurant</h5>
            <p>Highly popular Southern comfort food restaurant. Be prepared to stand in line on the weekends.</p>
          </div>
        </div>
        
      </div>
      <div className='spacer'></div>

      <h3>Woodruff</h3>
      <h6>(Wow, you really love us)</h6>
      <img 
        src={woodruff} 
        alt="up and coming" 
        className='map-photo'
      />
        <h5>Humble Grounds Cafe</h5>
        <h5>McKinney Park</h5>
        <h5>Woodruff Leisure Center</h5>
        <h5>Our House!</h5>
      <div className='spacer'></div>

    </div>
  );
};

export default Travel;

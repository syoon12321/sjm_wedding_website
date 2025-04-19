// src/pages/Travel.tsx
import React from 'react';

const Travel: React.FC = () => {
  return (
    <div className="main-section">
      <h3>Greetings from Upstate South Carolina</h3>
      <p>Who has a destination wedding in South Carolina? Apparently us.</p>

      <h3>Getting here</h3>
      <h4>Airports</h4>
        <p>Greenville-Spartanburg International Airport (GSP): 10-20 minutes</p>
        <p>Asheville Regional Airport (AVL): 1 hour</p>
        <p>Charlotte Douglas International Airport (CLT): 1-2 hours</p>
        <p>Columbia Metropolitan Airport (CAE): 2 hours</p>
        <p>Hartsfield-Jackson Atlanta International Airport (ATL): 3 hours</p>

      <h4>Accomodations</h4>
      <p>We recommend booking a stay at the Hampton Inn in Downtown Greer! It's close to our venue and the airport and right in the middle of a very cute area of Downtown Greer.</p> 
      <p>Here's our link to get a discount when you book your stay</p>
      <a href='https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=GSPGGHX&corporateCode=0003318723'>Hampton Inn Greer Greenville</a>
      <p>However, there are many other wonderful accomdations in this area, so feel free to book wherever you're most comfortable.</p>
      <p>Lastly, we'd love to host you at our house in Woodruff. If you don't mind driving 30+ minutes to the venue and need a free place to stay, let us know!</p>

      <h4>Transportation</h4>
      <p>Cars are the main form of transportation here. We hate it too.</p> 
      <p>Rideshare apps such as Uber and Lyft are available, or you can rent a car.</p>

      <h4></h4>

      <h3>Things to do</h3>
      <h4>Where to find the best tacos</h4>
      <p>Greer Taco at Barnyard Flea Market</p>

      <h3>Sightseeing</h3>
      <h4>Greenville</h4>
        <p>Falls Park on the Reedy</p>
        <p>Unity Park</p>
        <p>Swamp Rabbit Cafe/Trail</p>
        <p>Paris Mountain</p>
        <p>Korean BBQ on Woodruff Rd</p>
        <p>The Gelatist</p>
        <p>Carmella's</p>
        <p>M. Judson Booksellers</p>
      <h4>Greer</h4>
        <p>Downtown Greer</p>
        <p>BMW Manufacturing Plant</p>
        <p>Thai Vegan: fully vegan menu, and their rice is served in the shape of a heart</p>
        <p>La Estrella Panaderia and Taqueria</p>

      <h4>Spartanburg</h4>
        <p>St. Paul the Apostle Catholic Church</p>
        <p>Monsoon Noodle House</p>
        <p>El Chinchorro</p>
        <p>Costco</p>

      <h4>Woodruff</h4>
      <h6>(Wow, you really love us)</h6>
        <p>Humble Grounds Cafe</p>
        <p>McKinney Park</p>
        <p>Woodruff Leisure Center</p>
        <p>Our House!</p>
      
    </div>
  );
};

export default Travel;

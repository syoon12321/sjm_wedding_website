import React from 'react'

const Home: React.FC = () => {
    return (
      <div className="home-page">
        <header>
          <h1>Welcome to Our Application</h1>
          <p>We are excited to have you here. Explore and enjoy!</p>
        </header>
        <main>
          <section>
            <h2>Latest Updates</h2>
            <ul>
              <li>New features added to enhance user experience.</li>
              <li>Check out our latest blog post for tips and tricks.</li>
              <li>Join our community forum for discussions and support.</li>
            </ul>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
          </section>
        </main>
      </div>
    );
  };
  
export default Home;

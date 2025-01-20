// src/App.tsx
import React from 'react';
import './App.css';
import './styles/styles.css';
import Game from './components/Game';
import NavBar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordProtection from './components/PasswordProtection';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Travel from './pages/Travel';
import RSVP from './pages/RSVP';
import PlayGame from './pages/PlayGame';

function App() {

  let items = ["Home","Our Story", "Travel", "RSVP", "Play Game"];

  return (
    <Router>
      <div className="main-section">
        <NavBar navItems={items} />
        <Routes>
          <Route path="/" element={<PasswordProtection />} />
          <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/our-story" element={<ProtectedRoute> <OurStory /> </ProtectedRoute>} />
          <Route path="/travel" element={<ProtectedRoute> <Travel /> </ProtectedRoute>} />
          <Route path="/rsvp" element={<ProtectedRoute> <RSVP /> </ProtectedRoute>} />
          <Route path="/play-game" element={<ProtectedRoute> <PlayGame /> </ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

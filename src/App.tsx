// src/App.tsx
import React from 'react';
import './App.css';
import './styles/styles.css';
import Game from './components/Game';
import NavBar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordProtection from './components/PasswordProtection';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Travel from './pages/Travel';
import WeddingDetails from './pages/WeddingDetails';
import RSVP from './pages/RSVP';
import PlayGame from './pages/PlayGame';

function App() {

  let items = ["Home", "Travel", "Wedding Details", "RSVP", "Play Game"];

  return (
    <Router basename="/sjm_wedding_website">
      <div className="main-section">
        <NavBar navItems={items} />
        <Routes>
          <Route path="/" element={<PasswordProtection />} />
          <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/travel" element={<ProtectedRoute> <Travel /> </ProtectedRoute>} />
          <Route path="/wedding-details" element={<ProtectedRoute> <WeddingDetails /> </ProtectedRoute>} />
          <Route path="/rsvp" element={<ProtectedRoute> <RSVP /> </ProtectedRoute>} />
          <Route path="/play-game" element={<ProtectedRoute> <PlayGame /> </ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
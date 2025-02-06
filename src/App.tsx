// src/App.tsx
import React from 'react';
import './App.css';
import Game from './components/Game';
import NavBar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Travel from './pages/Travel';
import RSVP from './pages/RSVP';
import PlayGame from './pages/PlayGame';

function App() {

  let items = ["Home","Our Story", "Travel", "RSVP", "Play Game"];

  return (
    <Router>
      <div className="App">
        <NavBar navItems={items} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/play-game" element={<PlayGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
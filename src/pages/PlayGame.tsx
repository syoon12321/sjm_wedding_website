// src/pages/PlayGame.tsx
import React from 'react';
import Game from '../components/Game';

const PlayGame: React.FC = () => {
  return (
    <div className="game-container">
        <h2>Choose Your Own Adventure</h2>
        <h3>Manuel & Soohyun's Missed Encounters</h3>
        <Game />
    </div>
  );
};

export default PlayGame;

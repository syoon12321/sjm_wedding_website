// src/components/Game.tsx
import React, { useState } from 'react';
import { scenes } from '../storyline';
import { Scene as SceneType } from '../types';
import Scene from './Scene';

const Game: React.FC = () => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');

  const currentScene = scenes.find(scene => scene.id === currentSceneId);

  if (!currentScene) {
    return <p>Scene not found!</p>;
  }

  const handleChoice = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId);
  };

  return (
    <div>
      <Scene scene={currentScene} onChoice={handleChoice} />
    </div>
  );
};

export default Game;

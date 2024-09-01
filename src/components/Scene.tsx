// src/components/Scene.tsx
import React from 'react';
import { Scene as SceneType } from '../types';

interface SceneProps {
  scene: SceneType;
  onChoice: (nextSceneId: string) => void;
}

const Scene: React.FC<SceneProps> = ({ scene, onChoice }) => {
  return (
    <div>
      <p>{scene.text}</p>
      <div className="buttons-container">
        <ul>
          {scene.choices.map((choice, index) => (
            <li key={index}>
              <button onClick={() => onChoice(choice.nextSceneId)}>
                {choice.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scene;

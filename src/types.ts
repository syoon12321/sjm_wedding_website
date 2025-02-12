// src/types.ts
export interface Choice {
    text: string;
    nextSceneId: string;
  }
  
  export interface Scene {
    id: string;
    text: string;
    choices: Choice[];
  }
  
import React from 'react';
import * as Phaser from 'phaser';
import './App.css';
import gameConfig from './config/phaserConfig';
 
export const game = new Phaser.Game(gameConfig);

const App = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App;

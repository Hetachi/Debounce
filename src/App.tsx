import React from 'react';
import * as Phaser from 'phaser';
import './App.css';
import gameConfig from './config/phaserConfig';
 
const game = new Phaser.Game(gameConfig);
console.log(game)

const App = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App;

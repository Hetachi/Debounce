
import MainGame from '../scenes/MainGame';
export const sceneConfig: Phaser.Types.Core.GameConfig = {
  width: 3000,
  height: 3000,
}

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',
   
    type: Phaser.AUTO,
   
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: "matter",
      matter: {
        gravity: {
          y: 1
        },
        debug: false
        // debug: {
        //   showAngleIndicator: true,
        //   showVelocity: true,
        //   showPositions: true
        // }
      }
    },
   
    parent: 'game',
    transparent: true,
    scene: [MainGame]
  };

  export default gameConfig
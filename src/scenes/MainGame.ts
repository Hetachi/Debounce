import * as Phaser from 'phaser';
import { sceneConfig } from '../config/phaserConfig';
import Player from '../components/player';
import Enemy from '../components/enemy';
import Ball from '../components/ball';
const scoreboard = document.getElementById('score')
const scale = window.innerWidth > 800 ? window.devicePixelRatio / 1 : window.devicePixelRatio / 3
const speedUp = window.innerWidth > 800

class MainGame extends Phaser.Scene
{
    constructor ()
    {
        super(sceneConfig);
    }

    preload ()
    {
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('box', 'assets/box.png');
        this.load.image('enemy', 'assets/diamond.png');
    }

    create ()
    {
        const gameStarted = false
        const enemyList: any = []
        let score = 0
        
        this.matter.world.setBounds();
        this.matter.add.mouseSpring();

        new Player(this, (window.innerWidth/2), (window.innerHeight/2), scale)

        let ball = new Ball(this, scale, score, scoreboard, enemyList)

        const deathWall = this.matter.add.rectangle((window.innerWidth/2), (window.innerHeight-10), (window.innerWidth), 10)
        deathWall.ignorePointer = true;
        deathWall.isSensor = true;
        deathWall.isStatic = true;
        deathWall.onCollideCallback = (pair: any) => {
            if(!pair.bodyB.isEvil) {
                this.scene.restart();
                score = 0;
                if(scoreboard && scoreboard.innerHTML){
                    scoreboard.innerHTML = `Score: ${score}`
                }
            }
        }

        var timer = this.time.addEvent({
            delay: speedUp ? 675 : 1050,
            callback: ()=> {
                if(enemyList.length < 5) {
                    enemyList.push(
                        new Enemy(
                            this,
                            Phaser.Math.Between((window.innerWidth/12), (window.innerWidth-(window.innerWidth/12))),
                            Phaser.Math.Between(10, (window.innerHeight/2)),
                            scale
                        )
                    )
                }
            },
            callbackScope: this,
            loop: true,
            paused: true
        });


        this.input.on('pointerdown', (pointer: any) => {
            let bodiesUnderPoint = this.matter.intersectPoint(pointer.worldX, pointer.worldY);
            bodiesUnderPoint.forEach((body: any) => {
                if(!gameStarted && body.gameObject.isPlayer) {
                    ball.removeStatic()
                    timer.paused = false
                }
            });
        });
    }
}

export default MainGame
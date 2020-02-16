import Emitter from '../components/particle';
navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate;

class Ball {
    constructor(scene, scale, score, scoreboard, enemyList) {
        const squareSize = (100*scale)
        this.square = scene.matter.add.image((window.innerWidth/2), (window.innerHeight/3), 'box')
        this.square.setScale(1.5, 1.5)
        this.square.setRectangle(squareSize, squareSize)
        this.square.setToSleep(true)
        this.square.body.ignorePointer = true
        this.square.body.gameObject.setBounce(0.5)
        this.removeStatic = () => {
            this.square.setAwake(true)
        }
        this.square.body.onCollideCallback = (pair) => {
            if(pair.bodyB.isEvil) {
                const particler = new Emitter(scene, pair.bodyB.position.x, pair.bodyB.position.y, 0.3)
                particler.particles.emitParticleAt(pair.bodyB.position.x, pair.bodyB.position.y)
                if(navigator.vibrate) {
                    navigator.vibrate(50)
                }
                score += 1
                if(scoreboard && scoreboard.innerHTML){
                    scoreboard.innerHTML = `Score: ${score}`
                }
                const enemy = enemyList.find( enemy => enemy.ball.body.id === pair.bodyB.id)
                enemyList.splice(enemyList.indexOf(enemy), 1)
                enemy.ball.destroy()
            }
        }
    }
}

export default Ball
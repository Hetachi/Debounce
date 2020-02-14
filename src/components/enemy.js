class Enemy {
    constructor(scene, x, y, scale) {
        this.ball = scene.matter.add.image(x, y, 'enemy')
        this.ball.setScale(0.4, 0.4)
        this.ball.setBody({
            type: 'circle',
            radius: 8,
        });
        this.ball.body.isStatic = true
        this.ball.body.isSensor = true
        this.ball.body.isEvil = true
        this.toggleStatic = () => {
            this.ball.body.isStatic = !this.body.body.isStatic
        }
    }
}

export default Enemy
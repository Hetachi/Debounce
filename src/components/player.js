
class Player {
    constructor(scene, x, y, scale) {
        this.body = scene.matter.add.image(x, y, 'ball');
        this.body.setBody({
            type: 'circle',
            radius: 32,
        });
        this.body.setToSleep(true)
        this.body.isPlayer = true
    }
}

export default Player
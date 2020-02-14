class Emitter {
    constructor(scene) {
        this.particles = scene.add.particles('flares');
        this.emmiter = this.particles.createEmitter({
            frame: 'blue',
            quantity: 10,
            lifespan: 500,
            speed: { min: 10, max: 200 },
            scale: { start: 0.2, end: 0 },
            blendMode: 'ADD',
            on: false
        });
    }
}
export default Emitter
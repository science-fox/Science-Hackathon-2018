class Particle {
	
    constructor(x,y,r) {
        this.r = r;
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mass = 1.0;
    }
	
    applyForce(force) {
        this.acc.add(force.div(this.mass));
	}
	
	update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc = createVector(0,0);
	}

    draw() {
        ellipse(this.pos.x, this.pos.y, this.r);
    }

}
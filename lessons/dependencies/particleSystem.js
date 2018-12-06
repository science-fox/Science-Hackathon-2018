class Particle {
	
    constructor(x,y,r) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.vx = 0.0;
        this.vy = 0.0;
        this.ax = 0.0;
        this.ay = 0.0;
        this.mass = 1.0;
    }
	
    addForce(x,y) {
		this.ax += x / this.mass;
		this.ay += y / this.mass;
	}
	
	update() {
		this.vx += this.ax;
		this.vy += this.ay;
		this.x += this.vx;
		this.y += this.vy;
		this.ax = 0;
		this.ay = 0;
	}

    draw() {
        ellipse(this.x, this.y, this.r);
    }

}
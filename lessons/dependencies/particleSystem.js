class Particle {
	
    constructor(x,y,r) {
        this.r = r;
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mass = 1.0;
        
        //maybe find a way to not have these
        this.maxSpeed = 4;
        this.maxForce = 0.5;
    }
	
    applyForce(force) {
        this.acc.add(force.div(this.mass));
	}
	
	update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
	}

    draw() {
        ellipse(this.pos.x, this.pos.y, this.r);
    }

}

class Vehicle extends Particle {
    
    
    applyForce(desired) {
        //let desired = field.flowAt(this.pos);
        desired.mult(this.maxSpeed);
        let steer = desired.sub(this.vel);
        steer.limit(this.maxForce);
        this.acc.add(steer.div(this.mass));
    }

    draw() {
        let angle = this.vel.heading() + HALF_PI;
        fill(127);
        stroke(0);
        strokeWeight(1);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(angle);
        beginShape();
        vertex(0, -this.r*2);
        vertex(-this.r, this.r*2);
        vertex(this.r, this.r*2);
        endShape(CLOSE);
        pop();
    }
}
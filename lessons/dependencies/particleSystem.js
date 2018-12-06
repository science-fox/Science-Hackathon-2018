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
        this.forces();
	}
    
    forces(){   
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
    
    update() {
        this.forces();
        this.edges();
    }
        
        
    
    edges() {
        if (this.pos.x < this.r) {
            console.log("left")
            this.pos.x = width-this.r-scl;
        }
        if (this.pos.x > width-this.r-scl) {
            console.log("right")
            this.pos.x = 0+this.r;
        }
        if (this.pos.y < this.r) {
            console.log("top")
            this.pos.y = height-this.r-scl;
        }
        if (this.pos.y > height-this.r-scl) {
            console.log("bottom")
            this.pos.y = 0+this.r;
        }
    }

    draw() {
        let angle = this.vel.heading() + HALF_PI;
        fill(255);
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


/*
Because this is an alteration on Daniel Shiffman's work from The Coding Train,
the below license must be included in this file.
The MIT License (MIT)

Copyright (c) 2014 Daniel Shiffman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
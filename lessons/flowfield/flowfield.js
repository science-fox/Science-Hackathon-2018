

var p1;
function setup() {
  createCanvas(400, 400);
	p1 = new Particle(25,25,50);
}

function draw() {
  background(220);
	
	p1.addForce(0.1,0.1);
	p1.update();
	p1.draw();
}
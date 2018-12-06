var incr = 0.1;
var scl = 10;
var cols, rows;
var field

var p1;

function initiateFieldArray() {
    field = new Array(rows);
    for (let i = 0; i < field.length; i++) {
        field[i] = new Array(cols);
    }
}

function createFlowField() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * width) * 4;
            let angle = noise(xoff, yoff) * TWO_PI;
            xoff += incr;
            field[x][y] = p5.Vector.fromAngle(angle);    
        }
        yoff += incr;
    }
}

function setup() {
    createCanvas(200, 200);
    cols = floor(width / scl);
    rows = floor(height / scl);
	p1 = new Particle(25,25,50);
    framerateP = createP('');
    initiateFieldArray();
    createFlowField();
}

function draw() {
    background(220);
    
    
    stroke(0);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            push();
            let vec = field[x][y];
            translate(x * scl, y * scl);
            rotate(vec.heading());
            line(0, 0, scl, 0);
            pop();
        }
    }
    
    
	
	p1.applyForce(createVector(0.1,0.1));
	p1.update();
	p1.draw();
    
    framerateP.html(floor(frameRate()));
}
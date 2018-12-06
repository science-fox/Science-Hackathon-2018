var incr = 0.1;
var scl = 10;
var cols, rows;
var field
var displayField = true;

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
	p1 = new Vehicle(100,100,5);
    framerateP = createP('');
    initiateFieldArray();
    createFlowField();
}

function forceAt(pos) {
    let col = floor(pos.x / scl);
    let row = floor(pos.y / scl);
    return field[col][row].copy();
}

function draw() {
    background(220);
    
    
    if (displayField) {
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
    }
    
    
	p1.applyForce(forceAt(p1.pos));
	p1.update();
	p1.draw();
    
    framerateP.html(floor(frameRate()));
}
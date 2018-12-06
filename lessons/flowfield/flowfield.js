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
    createCanvas(800, 800);
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
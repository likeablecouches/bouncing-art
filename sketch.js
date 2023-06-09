let p1;
let p2;
let colorSlider;
let maxSpeed = 5;
let minSpeed = 1;
let bgColor = 255;
let paused = false;
let drawMode = "rectangle";
let centered = false;

function setup() {
	createCanvas(700, 600);

	background(bgColor);

	p1 = new Ball(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed));
	p2 = new Ball(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed));

	colorSlider = new ColorSlider(random(255), random(255), random(255));
}

function keyTyped() {
	switch(key) {
		case ' ':
			paused = !paused;
			break;
		case '1':
			background(bgColor);
			drawMode = 'rectangle';
			break;
		case '2':
			background(bgColor);
			drawMode = 'ellipse';
			break;
		case '3':
			background(bgColor);
			drawMode = 'line';
			break;
		case '4':
			centered = !centered;

			if (centered) {
				background(bgColor);
				p2 = new Ball(width / 2, height / 2, 0, 0);
			} else {
				background(bgColor);
				p2 = new Ball(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed));
			}

			break;
	}
}

function mouseClicked() {
	background(bgColor);
}

function draw() {
	if (paused) {
		return;
	}

	colorSlider.update();

	p1.move();
	p2.move();

	if (drawMode == "rectangle") {
		drawRectangle(p1, p2);
	} else if(drawMode == "ellipse") {
		drawEllipse(p1, p2);
	} else if(drawMode == "line") {
		drawLine(p1, p2);
	}
}


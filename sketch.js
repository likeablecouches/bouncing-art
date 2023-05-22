let p1;
let p2;
let colorSlider;
let maxSpeed;
let minSpeed;
let bgColor;

function setup() {
	// createCanvas(400, 400);
	createCanvas(700, 600);

	bgColor = 255 

	maxSpeed = 5 
	minSpeed = 1

	background(bgColor);
	p1 = new Ball(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed));
	p2 = new Ball(random(width), random(height), random(minSpeed, maxSpeed), random(minSpeed, maxSpeed));
	// p2 = new Ball(random(width), random(height), 0.001, 0.001);
	colorSlider = new ColorSlider(random(255), random(255), random(255));
}

function mouseClicked() {
	background(bgColor);
}
function draw() {
	p1.move()
	// p1.show()

	p2.move()
	// p2.show()

	colorSlider.update();
	// console.log(colorSlider.r.toFixed(1) + " " + colorSlider.g.toFixed(1) + " " + colorSlider.b.toFixed(1));

	// stroke(colorSlider.r, colorSlider.g, colorSlider.b, 100);
	stroke(colorSlider.r, colorSlider.g, colorSlider.b);

	// draw lines
	// line(p1.x, p1.y, p2.x, p2.y)

	// draw circles
	// noFill();
	// ellipse(p1.x, p1.y,2 * Math.abs(dist(p1.x, p1.y, p2.x, p2.y)));

	// draw rectangles
	rectMode(CORNERS);
	fill(bgColor);
	rect(p1.x, p1.y, p2.x, p2.y);
}

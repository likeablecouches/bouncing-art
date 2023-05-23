function drawLine(point1, point2) {
	stroke(colorSlider.r, colorSlider.g, colorSlider.b);
	line(p1.x, p1.y, p2.x, p2.y)
}

function drawRectangle(point1, point2) {
	rectMode(CORNERS);
	fill(bgColor);
	stroke(colorSlider.r, colorSlider.g, colorSlider.b);
	rect(point1.x, point1.y, point2.x, point2.y);
}

function drawEllipse(point1, point2) {
	ellipseMode(CORNERS);
	fill(bgColor);
	stroke(colorSlider.r, colorSlider.g, colorSlider.b);
	ellipse(point1.x, point1.y, point2.x, point2.y);
}

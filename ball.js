class Ball {
	constructor(x, y, speedX, speedY) {
		this.x = x;
		this.y = y;
		this.speedX = speedX;
		this.speedY = speedY;
	}

	detectCollisionWithEdge() {
		if (this.x < 0) {
			return 'left';
		}

		if (this.x > width) {
			return 'right';
		}

		if (this.y < 0) {
			return 'top';
		}

		if (this.y > height) {
			return 'bottom';
		}

		return null;
	}

	move() {
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;

		if (!this.detectCollisionWithEdge()) {
			return;
		}

		let residual = 0;

		if (this.detectCollisionWithEdge() == 'left') {
			residual = this.x
			this.x = this.x - residual;
			this.speedX = -this.speedX / Math.abs(this.speedX) * random(minSpeed, maxSpeed);
		}

		if (this.detectCollisionWithEdge() == 'right') {
			residual = this.x - width
			this.x = this.x - residual;
			this.speedX = -this.speedX / Math.abs(this.speedX) * random(minSpeed, maxSpeed);
		}

		if (this.detectCollisionWithEdge() == 'top') {
			residual = this.y
			this.y = this.y - residual;
			this.speedY = -this.speedY / Math.abs(this.speedY) * random(minSpeed, maxSpeed);
		}

		if (this.detectCollisionWithEdge() == 'bottom') {
			residual = this.y - height
			this.y = this.y - residual;
			this.speedY = -this.speedY / Math.abs(this.speedY) * random(minSpeed, maxSpeed);
		}

	}

	show() {
		noStroke();
		fill(0);
		ellipse(this.x, this.y, 8, 8);
	}
}
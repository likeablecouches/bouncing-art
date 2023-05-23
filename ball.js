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

	resolveCollision() {
		if (!this.detectCollisionWithEdge()) {
			return;
		}

		let residual = 0;

		let randomSpeed = random(minSpeed, maxSpeed);

		if (this.detectCollisionWithEdge() == 'left') {
			residual = this.x
			this.x = this.x - residual;


			this.speedX = -this.speedX / Math.abs(this.speedX) * randomSpeed;
		}

		if (this.detectCollisionWithEdge() == 'right') {
			residual = this.x - width
			this.x = this.x - residual;
			this.speedX = -this.speedX / Math.abs(this.speedX) * randomSpeed;
		}

		if (this.detectCollisionWithEdge() == 'top') {
			residual = this.y
			this.y = this.y - residual;
			this.speedY = -this.speedY / Math.abs(this.speedY) * randomSpeed;
		}

		if (this.detectCollisionWithEdge() == 'bottom') {
			residual = this.y - height
			this.y = this.y - residual;
			this.speedY = -this.speedY / Math.abs(this.speedY) * randomSpeed;
		}

	}

	move() {
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;

		this.resolveCollision();
	}

	show() {
		ellipseMode(CENTER);
		noStroke();
		fill(0);
		ellipse(this.x, this.y, 8, 8);
	}
}

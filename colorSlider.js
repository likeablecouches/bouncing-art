class ColorSlider {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.factor = 5

		this.rVel = random(-1, 1) / this.factor
		this.gVel = random(-1, 1) / this.factor
		this.bVel = random(-1, 1) / this.factor
	}

	update() {
		this.r = this.r + this.rVel;	
		this.g = this.g + this.gVel;	
		this.b = this.b + this.bVel;	

		this.updateColorVelocities();
	}

	updateColorVelocities() {
		if (this.r < 0 || this.r > 255) {
			this.rVel = -this.rVel;
		}

		if (this.g < 0 || this.g > 255) {
			this.gVel = -this.gVel;
		}

		if (this.b < 0 || this.b > 255) {
			this.bVel = -this.bVel;
		}

	}

}

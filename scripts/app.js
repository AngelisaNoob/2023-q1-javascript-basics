//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 700;

class Shape {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;

		this.width = 20;
		this.height = 6;

		this.color = "Grey";

		this.speed = 10000;
		this.xDirection = 5;
		this.yDirection = 1;
	}

	update() {
		if (this.x < 0 || this.x + this.width > canvas.width) {
			this.xDirection *= -1;
		}

		if (this.y < 0 || this.y + this.height > canvas.height) {
			this.yDirection *= -1;
		}

		this.x += this.speed * this.xDirection;
		this.y += this.speed * this.yDirection;
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
}

let shapes = [];

for (let i = 0; i < 20; i++) {
	let s = new Shape(
		Math.random() * canvas.width,
		Math.random() * canvas.height
	);

	s.speed = Math.random() * 5 + 5;

	shapes.push(s);
}

let animationLoop = function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	shapes.forEach((s) => {
		s.update();
		s.draw();
	});

	window.requestAnimationFrame(animationLoop);
};

window.requestAnimationFrame(animationLoop);

context.fillStyle = "rgba(255,0,0,0.33)";    // red color with 1/3 transparency


	} 
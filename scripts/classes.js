class Circle {
	constructor (ctx, x, y, r) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	draw () {
		this.ctx.beginPath();
		this.ctx.fillStyle = 'orange';
		this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		this.ctx.fill();
	}
};

class Player extends Circle {
	constructor (ctx, x, y, r, imgSrc) {
		super(ctx, x, y, r);
		
		this.img = document.createElement('img');
		this.img.src = imgSrc;
	}
	
	draw () {
		this.ctx.drawImage(this.img, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
	}
};
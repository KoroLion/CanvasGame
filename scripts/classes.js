class Circle {
	constructor (ctx, x, y, r) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	draw () {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		this.ctx.fill();
	}
};

class Food extends Circle {
    constructor (ctx, x, y, r, color) {
        super(ctx, x, y, r);
        
        this.color = color;
    }
    
    draw () {
        this.ctx.fillStyle = this.color;
        super.draw();
    }
};

class Player extends Circle {
	constructor (ctx, x, y, r, imgSrc, speed = 5) {
		super(ctx, x, y, r);
		
		this.img = document.createElement('img');
		this.img.src = imgSrc;
        
        this.speed = speed;
        
        this.targetX = 0;
        this.targetY = 0;
	}
    
    update () {
        if (Math.abs(this.targetX - this.x) > this.speed || Math.abs(this.targetY - this.y) > this.speed) {
            let a = Math.atan2(this.targetY - this.y, this.targetX - this.x) / Math.PI * 180;
            this.x = this.x + this.speed * Math.cos(a * (Math.PI / 180));
            this.y = this.y + this.speed * Math.sin(a * (Math.PI / 180));
        }
    }
	
	draw () {
		this.ctx.drawImage(this.img, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
	}
};
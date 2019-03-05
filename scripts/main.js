let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

fitToScreen(canvas);
window.addEventListener('resize', function () {
	fitToScreen(canvas);
});

let food = [];
for (let i = 0; i < 100; i++) {
	food.push(new Circle(ctx, getRandom(10, canvas.width), getRandom(10, canvas.height), 10));
}

let p = new Player(ctx, 20, 20, 35, 'shibainu.png');

function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	for (let i = 0; i < 100; i++) {
		food[i].draw();
	}
	p.draw();
	
	requestAnimationFrame(render);
}
render();

canvas.addEventListener('mousemove', function (e) {
	p.x = e.clientX;
	p.y = e.clientY;
});
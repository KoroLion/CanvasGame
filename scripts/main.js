const FOOD_AMOUNT = 100;

let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

fitToScreen(canvas);
window.addEventListener('resize', function () {
	fitToScreen(canvas);
});

let food = [];
for (let i = 0; i < FOOD_AMOUNT; i++) {
	food.push(new Food(ctx, getRandom(10, canvas.width), getRandom(10, canvas.height), 10, 'green'));
}

let p = new Player(ctx, 20, 20, 35, 'shibainu.png');

function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	for (let i = 0; i < food.length; i++) {
        if (circleCollision(p, food[i])) {
            food.splice(i, 1);
            i--;
        } else {
            food[i].draw();
        }
	}
    p.update();
	p.draw();
	
	requestAnimationFrame(render);
}
render();

canvas.addEventListener('mousemove', function (e) {
	p.targetX = e.clientX;
	p.targetY = e.clientY;
});
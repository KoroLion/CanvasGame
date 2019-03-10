function getRandom(min, max) {
    // [min, max)
    return Math.random() * (max - min) + min;
}

function circleCollision(c1, c2) {
    if (Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y, 2) <= Math.pow(c2.r + c1.r, 2)) {
        return true;
    } else {
        return false;
    }
}

function fitToScreen(cnv) {
	cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
}
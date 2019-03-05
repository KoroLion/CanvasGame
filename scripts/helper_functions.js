function getRandom(min, max) {
    // [min, max)
    return Math.random() * (max - min) + min;
}

function circleCollision(s1, s2) {
    if (Math.pow(s2.x - s1.x, 2) + Math.pow(s2.y - s1.y, 2) <= Math.pow(s2.r + s1.r, 2)) {
        return true;
    } else {
        return false;
    }
}

function fitToScreen(cnv) {
	cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
}
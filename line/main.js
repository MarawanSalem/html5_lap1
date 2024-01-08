var line = document.getElementById("line");
var x = 0;
var y = 0;

function animation() {
    x += 5;
    y += 5;
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    if (x >= 400 && y >= 400) {
        clearInterval(interval);
        alert("Animation end!");
    }
}

var interval = setInterval(animation, 100);

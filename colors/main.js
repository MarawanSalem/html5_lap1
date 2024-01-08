window.onload = function() {
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    var colorText = document.getElementById('colorText');

    function changeColor() {
        colorText.style.color = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
    }

    red.addEventListener('input', changeColor);
    green.addEventListener('input', changeColor);
    blue.addEventListener('input', changeColor);
}

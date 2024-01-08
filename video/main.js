var video = document.getElementById("myVideo");
var playBtn = document.getElementById("playBtn");
var stopBtn = document.getElementById("stopBtn");
var rewindBtn = document.getElementById("rewindBtn");
var forwardBtn = document.getElementById("forwardBtn");
var volumeSlider = document.getElementById("volumeSlider");
var muteBtn = document.getElementById("muteBtn");
var speedSelect = document.getElementById("speedSelect");
var startBtn = document.getElementById("startBtn");
var endBtn = document.getElementById("endBtn");
var fullScreenBtn = document.getElementById("fullScreenBtn");

startBtn.addEventListener("click", startVid)
endBtn.addEventListener("click", endVid)
playBtn.addEventListener("click", playVideo);
stopBtn.addEventListener("click", stopVideo);
rewindBtn.addEventListener("click", rewindVideo);
forwardBtn.addEventListener("click", forwardVideo);
volumeSlider.addEventListener("input", changeVolume);
muteBtn.addEventListener("click", muteVideo);
speedSelect.addEventListener("change", changeSpeed);
fullScreenBtn.addEventListener("click", toggleFullscreen);


function endVid() {
    video.currentTime = video.duration;
}

function startVid() {
    video.currentTime = 0;
}

function playVideo() {
    video.play();
}

function stopVideo() {
    video.pause();
}

function rewindVideo() {
    video.currentTime -= 5;
}

function forwardVideo() {
    video.currentTime += 5;
}

function changeVolume() {
    video.volume = volumeSlider.value;
}

function muteVideo() {
    video.muted = !video.muted;
}

function changeSpeed() {
    video.playbackRate = speedSelect.value;
}



function toggleFullscreen() {
        var video = document.getElementById('myVideo');

        if (video.requestFullscreen) {
        video.requestFullscreen();
        } 
        else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
        }
         else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        video.webkitRequestFullscreen();
        } 
        else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
        }
    }
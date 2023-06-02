var video = document.querySelector('video');
var playbutton = document.getElementById('play');
var ctime = document.getElementById('current');
var expand = document.getElementById('expand');
var line = document.getElementById('line');
var bar = document.getElementById('progressbar');
console.log("get video:" + video);
function ftime(time) {
    console.log(time);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)
}
function show() {
    console.log("show video");
    video.classList.add('video-show');
}
function hide() {
    video.classList.remove('video-show');
}
video.oncanplay = function () {
    console.log("oncanplay---");
    show();
    console.log(video.duration);
    var totaltime = ftime(video.duration);
    console.log("totaltime" + totaltime);
    document.getElementById('total').innerHTML = totaltime;
}
function setstate(play) {
    console.log("setstate---to play" + play);
    if (play) {
        playbutton.classList.add('fa-pause');
        playbutton.classList.remove('fa-play');
    }
    else {
        playbutton.classList.add('fa-play');
        playbutton.classList.remove('fa-pause');
    }
}
function changeplaystate() {
    console.log("changeplaystate");
    var playstate = playbutton.classList.contains('fa-play');
    if (playstate) {
        video.play();
    }
    else {
        video.pause();
    }
    setstate(playstate);
}
playbutton.onclick = changeplaystate;
video.onclick = changeplaystate;
video.ontimeupdate = function () {
    var w = video.currentTime / video.duration * 100 + "%";
    console.log(video.ctime);
    line.style.width = w;
    ctime.innerHTML = ftime(video.currentTime);
}
expand.onclick = function () {
    if (this.classList.contains("fa-arrows-alt")) {
        video.webkitRequestFullScreen();
        expand.classList.add('fa-compress');
        expand.classList.remove("fa-arrows-alt");
    }
    else {
        document.webkitCancelFullScreen();
        expand.classList.add("fa-arrows-alt");
        expand.classList.remove('fa-compress')
    }
}
video.onended = function () {
    video.ctime = 0;
    setstate(false);
}
bar.onclick = function (event) {
    var offset = event.offsetX;
    var current = offset / bar.scrollWidth * video.duration;
    video.currentTime = current;
    console.log("video change to ---" + current);
}
function checkFull() {
    var isFull = document.webkitIsFullScreen;
    if (isFull === undefined) {
        isFull = false;
    }
    return isFull;
}
function resizeVideo() {
    console.log("resvideo---");
    if (!checkFull()) {
        expand.classList.add("fa-arrows-alt");
        expand.classList.remove('fa-compress');
    }
}
document.addEventListener("keydown", keydown);
function keydown(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        changeplaystate();
    }
}


let currentVideo = 1;
function switchVideo() {
    if (currentVideo === 1) {
        video.src = 'mp4/sx3.mp4';
        currentVideo = 3;
    } else if (currentVideo === 3) {
        video.src = 'mp4/sx2.mp4';
        currentVideo = 2;
    } else {
        video.src = 'mp4/sx1.mp4';
        currentVideo = 1;
    }


    video.play();
}  
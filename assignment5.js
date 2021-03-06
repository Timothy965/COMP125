//Developed by Timothy Issac Thomas, 301229888
//Copyright 2022
//
//
//


var bugSmashed = 0;
var scoreSpan;

window.addEventListener("load", setUpPage, false);

function setUpPage() {
    canvasAddEventListener();
    scoreSpan = document.getElementById("score");
    scoreSpan.innerHTML = "0";
}


var canvas = document.createElement('canvas');
canvas.id = "bugSmasherCanvas";
canvas.style.zIndex = 10;
var ctx = canvas.getContext("2d");

var divGameStage = document.getElementById("divGameStage");
divGameStage.appendChild(canvas);

const win = {
    w: divGameStage.getBoundingClientRect().width,
    h: divGameStage.getBoundingClientRect().height
}
console.log(win);
const bgImage = new Image();
const bugImage = new Image();


var bugReady = false;
const bugImgSrc = 'bug.jpg';
bugImage.onload = function () {
    bugReady = true;
};

bugImage.src = bugImgSrc;


const init = () => {
    resize();
    render();
    timer = setInterval(reset, 30000 / fps);
    reset();
}



const bgImgSrc = "main5.jpg";
bgImage.onload = init;
bgImage.src = bgImgSrc;

var bug = {
    x: Math.floor(20 + (Math.random() * (divGameStage.getBoundingClientRect().width - 100))),
    y: Math.floor((Math.random() * (550)))
};
var fps = 5;
var timer = 0;



const resize = () => {
    win.w = divGameStage.getBoundingClientRect().width;
    win.h = divGameStage.getBoundingClientRect().height;
    canvas.width = win.w;
    canvas.height = win.h;
    canvas.style.width = `${win.w - 20}px`;
    canvas.style.height = `${win.h + 10}px`;
   
}



const render = () => {
    ctx.clearRect(0, 0, win.w, win.h);
    
    coverImg(bgImage, 'cover');

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y, 55, 55);
    }
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "16px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Bug Smashed: " + bugSmashed, 0, 5);
    requestAnimationFrame(render);
}



window.addEventListener('resize', render);


var reset = function () {
    bug.x = Math.floor(20 + (Math.random() * (divGameStage.getBoundingClientRect().width - 100)));
    bug.y = Math.floor((Math.random() * (550)))

    if (bugReady) {
        render();
        ctx.drawImage(bugImage, bug.x, bug.y, 60, 60);
    }
};


var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


function canvasAddEventListener() {
    var canvas = document.getElementById("bugSmasherCanvas");
    if (canvas.addEventListener) {
        canvas.addEventListener("mousedown", onMouseDown, false);
    } else if (canvas.attachEvent) {
        canvas.attachEvent("onmousedown", onMouseDown);
    }
}
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function onMouseDown(event) {
    var mouseXinCanvas = getMousePosition(canvas, event).x;
    var mouseYinCanvas = getMousePosition(canvas, event).y
    if (isBugSmashed(bug, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 30000 / fps);
        reset();
    }
};


function isBugSmashed(bug, clickX, clickY) {

    if (
        Math.abs(bug.x - clickX) <= 60 &&
        Math.abs(bug.y - clickY) <= 60
    ) {
        ++bugSmashed;
        scoreSpan.innerText = bugSmashed;
        fps = fps + 2;

        return true;
    }
    return false;
};


function resetScore() {

    scoreSpan.innerText = 0;
    bugSmashed = 0;
    reset();
    return false;
};


function resetSpeed() {

    fps = 5;
    clearInterval(timer);
    timer = setInterval(reset, 30000 / fps);
    reset();
    return false;
};



const coverImg = (bgImage, type = 'cover') => {
    const imgRatio = bgImage.height / bgImage.width;
    const winRatio = window.innerHeight / window.innerWidth;
    if ((imgRatio < winRatio && type === 'contain') || (imgRatio > winRatio && type === 'cover')) {
        const h = window.innerWidth * imgRatio;
        ctx.drawImage(bgImage, 0, (window.innerHeight - h) / 2, window.innerWidth, h);
    }
    if ((imgRatio > winRatio && type === 'contain') || (imgRatio < winRatio && type === 'cover')) {
        const w = window.innerWidth * winRatio / imgRatio;
        ctx.drawImage(bgImage, 0, 0, divGameStage.getBoundingClientRect().width, divGameStage.getBoundingClientRect().height);

    }
}

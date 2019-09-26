const path = require('path')

let camera;
let canvas;
let video;
let constraints = { video: { mandatory: { minWidth: 1920, minHeight: 1080 }, optional: [{ maxFrameRate: 60 }] }, audio: false };

function setup() {
    canvas = createCanvas(1920 / 2, 1080 / 2, WEBGL);
    canvas.id('canvas');
    canvas.style('position', 'absolute')
    canvas.style('transform', 'scaleX(-1)');
    canvas.style('width', 1920 + 'px');
    canvas.style('height', 1080 + 'px');
    video = createVideo([path.join(__dirname, './video/PexelsVideos3688.mp4')]);
    video.size(1920, 1080)
    video.loop();
    camera = createCapture(constraints, camearaReady);
    camera.id('camera');
    camera.hide();
}

function camearaReady() {
    let seriously = new Seriously();
    let src = seriously.source('#camera');
    let target = seriously.target('#canvas');
    let chroma = seriously.effect('chroma');

    chroma.source = src;
    target.source = chroma;
    let r = 98 / 255;
    let g = 175 / 255;
    let b = 116 / 255;
    chroma.weight = 1
    chroma.balance = 1
    chroma.clipBlack = 1
    chroma.clipWhite = 1
    chroma.screen = [r, g, b, 1];
    seriously.go();
}

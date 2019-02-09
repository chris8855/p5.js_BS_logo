
var img;
function preload() {
  img = loadImage('Blueshiftlogo.png');
}

function setup() {
  createCanvas(600, 1000, WEBGL);
}

function draw() {
  background(255);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(img);
  box(200, 200, 200);
}

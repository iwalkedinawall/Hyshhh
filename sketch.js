let input;
let analyzer;
input = new p5.AudioIn();

input.start();
var song;


function preload() {
  song = loadSound("Hysh.m4a");
  img = loadImage("Hysh.jpg");
}

function setup() {
  createCanvas(600,600);
  input = new p5.AudioIn();
  input.start();
  frameRate(5);
}


function draw() {
  background(0);


  let volume = input.getLevel();
  let threshold = 0.17;
  if (volume > threshold) {
    song.play();
    song.playMode("untilDone");
   
  }
  if (volume > 0.05) {
     image(img, 0, 0);
  }
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);

  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}
let Raphael; 

function preload(){
  Raphael = loadSound("Raphael.m4a");
}

function setup() {
  createCanvas(1000, 1000);
  Raphael.play();
}

function draw() {
  background("black");
  if (!Raphael.isPlaying()) {
  fill("white");
  textSize(20);
  text("Raphael tragically passed away from a collapsing mine on April 16, 2018",100,300);
    }
}

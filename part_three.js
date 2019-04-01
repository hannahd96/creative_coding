'use strict';

var img;
var colorsArray = [];
var sortMode = null;

function preload() {
  img = loadImage('data/pic2.jpg');
}

function setup() {
  createCanvas(1240, 1748);
  noStroke();
}

function draw() {
  var tileCount = floor(width/10);
  var tileSize = width / tileCount;

  img.loadPixels();
  colorsArray = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * tileSize);
      var py = int(gridY * tileSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colorsArray.push(c);
    }
  }
  // generative design library = gd
  gd.sortColors(colorsArray, sortMode);

  var i = 0;
  // for loop draws tiles accross x and y axis
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // loop through colours in color array and fill the shape
      fill(colorsArray[i]);
      // c is equal to a random colour between 0 and 100
      var c = random(100);
      // rectangle (tile) x position, y position, width, height
      // these will be random values as it uses the c variable from above
      rect(gridX * tileSize +c, gridY * tileSize+c, tileSize+c, tileSize+c);
      // counter
      i++;
    }
  }
  // stops it from looping
  noLoop();
}



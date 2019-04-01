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
  // floor() calculates the closest int value that is less than or equal to the value of the parameter
  var tileCount = floor(width/10);
  // set the siz of the rectangle (tile size)
  var tileSize = width / tileCount;
  // loads pixels from image into colors array below
  img.loadPixels();
  colorsArray = [];

  // for loop printing out tiles into canvas accross x and y axis
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // pixels position of x axis
      // int() converts the parameter(s) to an int
      var px = int(gridX * tileSize);
      // pixels position on y axis
      var py = int(gridY * tileSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      //  function that saves the current drawing style settings and transformations
      colorsArray.push(c);
    }
  }
}
// allows you to place a program, or a function, in a "strict" operating context. 
// use strict also prevents certain actions from being taken and throws more exceptions.
'use strict';

// declare global variable  
var img;
// declare colors array which will store all image pixels
var colorsArray = [];
var sortMode = null;

// preloads image using path in the brackets
function preload() {
  // img variable (declared above) loads image using given path
  img = loadImage('data/pic2.jpg');
}

// sets up canvas, its width and height
function setup() {
  createCanvas(1240, 1748);
  // no stroke around each pixel
  noStroke();
}
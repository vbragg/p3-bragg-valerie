'use strict';

//Global Variables

var moveBoxesRight = document.getElementsByClassName('moveoutright');
var moveBoxesLeft = document.getElementsByClassName('moveoutleft');
var rightBoxes = document.getElementById('moveright');
var leftBoxes = document.getElementById('moveleft');
var layerOne = document.getElementById('layer-one');

//Global layer two variables
var layerTwo = document.getElementById('layer-two');
var moveBoxesRightTwo = document.getElementsByClassName('moveoutright-two');
var moveBoxesLeftTwo = document.getElementsByClassName('moveoutleft-two');
var leftBoxesTwo = document.getElementById('moveleft-two');
var rightBoxesTwo = document.getElementById('moveright-two');
//const stringValue = //String.valueOf(moveBoxesLeftTwo);

//Our Function
function loopThrough() {

  var changeSpace = function changeSpace() {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeSpace, i * 400);
  }
};

function loopThroughTwo() {

  var changeSpace = function changeSpace() {
    leftBoxesTwo.classList.toggle('leftover');
    rightBoxesTwo.classList.toggle('rightover');
  };
  var textContent = this.textContent;
  for (var i = 0; i < Number(textContent) * 2; i++) {
    setTimeout(changeSpace, i * 400);
  }
};

function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 400);
};

function changeLayerTwo() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  var textContent = this.textContent;
  setTimeout(swap, Number(textContent) * 2 * 400);
};

//Event Listener
for (var i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
  moveBoxesLeft[i].addEventListener('click', changeLayer);
  moveBoxesLeftTwo[i].addEventListener('click', loopThroughTwo);
  moveBoxesLeftTwo[i].addEventListener('click', changeLayerTwo);
};

for (var _i = 0; _i < moveBoxesRight.length; _i++) {
  moveBoxesRight[_i].addEventListener('click', loopThrough);
  moveBoxesRight[_i].addEventListener('click', changeLayer);
  moveBoxesRightTwo[_i].addEventListener('click', loopThroughTwo);
  moveBoxesRightTwo[_i].addEventListener('click', changeLayerTwo);
};
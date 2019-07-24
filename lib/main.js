'use strict';

//Global Variables

var moveBoxesRight = document.getElementsByClassName('moveoutright');
var moveBoxesLeft = document.getElementsByClassName('moveoutleft');
var rightBoxes = document.getElementById('moveright');
var leftBoxes = document.getElementById('moveleft');
var layerOne = document.getElementById('layer-one');
var layerTwo = document.getElementById('layer-two');

//Our Function
function loopThrough() {

  var changeSpace = function changeSpace() {
    leftBoxes.classList.toggle('leftover');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
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

//Event Listener
for (var i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
  moveBoxesLeft[i].addEventListener('click', changeLayer);
};

for (var _i = 0; _i < moveBoxesRight.length; _i++) {
  moveBoxesRight[_i].addEventListener('click', loopThrough);
  moveBoxesRight[_i].addEventListener('click', changeLayer);
};
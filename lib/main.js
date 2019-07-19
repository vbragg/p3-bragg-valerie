'use strict';

//Global Variables

var moveBoxes = document.getElementsByClassName('moveout');
var rightBoxes = document.getElementById('moveright');
var leftBoxes = document.getElementById('moveleft');

//Our Function
function loopThrough() {
  var _this = this;

  var changeSpace = function changeSpace() {
    _this.classList.toggle('moveright');
    _this.classList.toggle('moveleft'); //check to see if you need a ; after each line
  };
  for (var i = 0; i < this.textContent.length; i++) {
    changeSpace();
  }
};

//Event Listener
for (var i = 0; i < moveBoxes.length; i++) {
  moveBoxes[i].addEventListener('click', loopThrough);
};

/*
for (let i = o; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click',loopThrough);
};
*/
'use strict';

//Global Variables

var moveBoxesRight = document.getElementsByClassName('moveoutright');
var moveBoxesLeft = document.getElementsByClassName('moveoutleft');
var rightBoxes = document.getElementById('moveright');
var leftBoxes = document.getElementById('moveleft');
var moveBoxes = document.getElementsByClassName('move');

//Our Function
function loopThrough() {

  var changeSpace = function changeSpace() {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeSpace, i * 1000);
  };
};

//Event Listener
for (var i = 0; i < moveBoxesRight.length; i++) {
  moveBoxesRight[i].addEventListener('click', loopThrough);
};

for (var _i = 0; _i < moveBoxesLeft.length; _i++) {
  moveBoxesLeft[_i].addEventListener('click', loopThrough);
};

/*
for (let i = o; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click',loopThrough);
};
*/

//WANT TO TOGGLE BACK AND FORTH ON FLEXSTRETCH BETWEEN JUSTIFY CONTENT CENTER AND JUSTIFY CONTENT SPACE-BETWEEN
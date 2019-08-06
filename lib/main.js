'use strict';

//Global Variables

var moveBoxesRight = document.getElementsByClassName('moveoutright');
var moveBoxesLeft = document.getElementsByClassName('moveoutleft');
var rightBoxes = document.getElementById('moveright');
var leftBoxes = document.getElementById('moveleft');
var topBoxes = document.getElementsByClassName('moveup');
var bottomBoxes = document.getElementsByClassName('movedown');
var layerOne = document.getElementById('layer-one');

//Variables needed for toggling to get boxes to move up in layer one
var orangeBox = document.getElementById('orange');
var greenBox = document.getElementById('green');
var purpleBox = document.getElementById('purple');
var yellowBox = document.getElementById('yellow');

//Variables needed for toggling to get boxes to move up in layer two
var orangeBoxTwo = document.getElementById('orange-two');
var greenBoxTwo = document.getElementById('green-two');
var purpleBoxTwo = document.getElementById('purple-two');
var yellowBoxTwo = document.getElementById('yellow-two');

//Global layer two variables
var layerTwo = document.getElementById('layer-two');
var moveBoxesRightTwo = document.getElementsByClassName('moveoutright-two');
var moveBoxesLeftTwo = document.getElementsByClassName('moveoutleft-two');
var leftBoxesTwo = document.getElementById('moveleft-two');
var rightBoxesTwo = document.getElementById('moveright-two');

//global layer three variables

var layerThree = document.getElementById('layer-three');
var layerThreeButtons = document.getElementsByClassName('layerthreep');

//OUR FUNCTIONS FOR COLORS AND NUMBERS

//This is the color layer
function loopThrough() {

  var changeSpace = function changeSpace() {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  };
  var changeSpaceUp = function changeSpaceUp() {
    orangeBox.classList.toggle('upboxorange');
    greenBox.classList.toggle('upboxgreen');
    purpleBox.classList.toggle('downboxpurple');
    yellowBox.classList.toggle('downboxyellow');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21].indexOf(i) > -1) {
      setTimeout(changeSpace, i * 400);
    } else {
      setTimeout(changeSpaceUp, i * 400);
    }
  }
};

//ABOVE ISN'T WORKING. MAYBE TRY BREAKING EACH BOX INTO ITS OWN VARIABLE AND TOGGLING IT THAT WAY?

//This is the numbers layer
function loopThroughTwo() {

  var changeSpace = function changeSpace() {
    leftBoxesTwo.classList.toggle('leftover');
    rightBoxesTwo.classList.toggle('rightover');
  };
  var changeSpaceUp = function changeSpaceUp() {
    orangeBoxTwo.classList.toggle('upboxorange');
    greenBoxTwo.classList.toggle('upboxgreen');
    purpleBoxTwo.classList.toggle('downboxpurple');
    yellowBoxTwo.classList.toggle('downboxyellow');
  };
  var textContent = this.textContent;
  for (var i = 0; i < Number(textContent) * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21].indexOf(i) > -1) {
      setTimeout(changeSpace, i * 400);
    } else {
      setTimeout(changeSpaceUp, i * 400);
    }
  }
};

//This changes the layer from colors to numbers
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 400);
};

function changeLayerTwo() {
  var swapTwo = function swapTwo() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  var textContent = this.textContent;
  setTimeout(swapTwo, Number(textContent) * 2 * 400);
}

//Event Listeners for above functions
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

//***********THIS CONTROLS THE RANDOM FORTUNE AT THE END***********

//variables

var randomFortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself.", "A gambler not only will lose what he has, but also will lose what he doesn’t have.", "A golden egg of opportunity falls into your lap this month.", "A good friendship is often more important than a passionate romance.", "A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A lifetime friend shall soon be made.", "A lifetime of happiness lies ahead of you.", "A light heart carries you through all the hard times."];

var replaceParagraph = document.getElementById('displayfortune');
var crystalBall = document.getElementById('centered');
var introParagraph = document.getElementById('intro');
var randomizeFortunes = Math.floor(Math.random() * 15); // THis gets random to return a total of 3 numbers

//function to change from numbers to display fortune
function changeLayerThree() {
  var swapThree = function swapThree() {
    layerThree.classList.add('hide');
    introParagraph.classList.add('hide');
    crystalBall.classList.remove('hide');
    replaceParagraph.classList.remove('hide');
  };
  setTimeout(swapThree, 100);
};

for (var _i2 = 0; _i2 < layerThreeButtons.length; _i2++) {
  layerThreeButtons[_i2].addEventListener('click', changeLayerThree);
}

replaceParagraph.innerHTML = randomFortune[randomizeFortunes];
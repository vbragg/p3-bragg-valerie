//**************ALL VARIABLES***********************
//****************************************************


//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');
const topBoxes = document.getElementsByClassName('moveup');
const bottomBoxes =document.getElementsByClassName('movedown');
const layerOne = document.getElementById('layer-one');

//Variables needed for toggling to get boxes to move up in layer one
const orangeBox =document.getElementById('orange');
const greenBox = document.getElementById('green');
const purpleBox = document.getElementById('purple');
const yellowBox = document.getElementById('yellow');

//Variables needed for toggling to get boxes to move up in layer two
const orangeBoxTwo =document.getElementById('orange-two');
const greenBoxTwo = document.getElementById('green-two');
const purpleBoxTwo= document.getElementById('purple-two');
const yellowBoxTwo = document.getElementById('yellow-two');

//Global layer two variables
const layerTwo = document.getElementById('layer-two');
const moveBoxesRightTwo = document.getElementsByClassName('moveoutright-two');
const moveBoxesLeftTwo = document.getElementsByClassName('moveoutleft-two');
const leftBoxesTwo = document.getElementById('moveleft-two');
const rightBoxesTwo = document.getElementById('moveright-two')

//Global layer three variables

const layerThree = document.getElementById('layer-three');
const layerThreeButtons = document.getElementsByClassName('layerthreep');

//Variables needed to display fortune at the end

let randomFortune = [
"A beautiful, smart, and loving person will be coming into your life.",
"A dubious friend may be an enemy in camouflage.",
"A faithful friend is a strong defense.",
"A feather in the hand is better than a bird in the air.",
"A fresh start will put you on your way.",
"A friend asks only for your time not your money.",
"A friend is a present you give yourself.",
"A gambler not only will lose what he has, but also will lose what he doesn’t have.",
"A golden egg of opportunity falls into your lap this month.",
"A good friendship is often more important than a passionate romance.",
"A good time to finish up old tasks.",
"A hunch is creativity trying to tell you something.",
"A lifetime friend shall soon be made.",
"A lifetime of happiness lies ahead of you.",
"A light heart carries you through all the hard times."
];

const replaceParagraph = document.getElementById('displayfortune');
const crystalBall = document.getElementById('centered');
const introParagraph = document.getElementById('intro');
let randomizeFortunes = Math.floor(Math.random()*15); // THis gets random to return a total of 3 numbers



//*************************FUNCTIONS, in order of how they would run when user is interacting*****************
//************************************************************************************************************


//This is the color layer
function loopThrough() {

  const changeSpace = () => {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  };
  const changeSpaceUp = () => {
    orangeBox.classList.toggle('upboxorange');
    greenBox.classList.toggle('upboxgreen');
    purpleBox.classList.toggle('downboxpurple');
    yellowBox.classList.toggle('downboxyellow');
  };
  for (let i =0; i < this.textContent.length * 2; i++){
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21].indexOf(i) > -1) {
      setTimeout(changeSpace, i * 400);
    } else {
      setTimeout(changeSpaceUp, i * 400);
    }
  }
};

//This changes the layer from colors to numbers
function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 400);

};

//This is the first numbers layer
function loopThroughTwo() {

  const changeSpace = () => {
    leftBoxesTwo.classList.toggle('leftover');
    rightBoxesTwo.classList.toggle('rightover');
  };
  const changeSpaceUp = () => {
    orangeBoxTwo.classList.toggle('upboxorange');
    greenBoxTwo.classList.toggle('upboxgreen');
    purpleBoxTwo.classList.toggle('downboxpurple');
    yellowBoxTwo.classList.toggle('downboxyellow');
  };
  const textContent = this.textContent;
  for(let i =0; i < Number(textContent) * 2; i++){
    if([0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21].indexOf(i) > -1) {
    setTimeout(changeSpace, i * 400);
    } else {
    setTimeout(changeSpaceUp, i * 400);
    }
  }
};

//This changes the first number layer to the second number layer
function changeLayerTwo() {
  const swapTwo = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  const textContent = this.textContent;
  setTimeout(swapTwo, Number(textContent) * 2 * 400);
}

//THis changes from second number layers to display fortune
function changeLayerThree() {
  const swapThree = () => {
    layerThree.classList.add('hide');
    introParagraph.classList.add('hide');
    crystalBall.classList.remove('hide');
    replaceParagraph.classList.remove('hide');
  }
  setTimeout(swapThree, 100);

};


//********************************************EVENT LISTENERS******************************************
//*****************************************************************************************************

//This controls the boxes movement in the first two layers
for (let i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
  moveBoxesLeft[i].addEventListener('click', changeLayer);
  moveBoxesLeftTwo[i].addEventListener('click', loopThroughTwo);
  moveBoxesLeftTwo[i].addEventListener('click', changeLayerTwo);
};

for (let i = 0; i < moveBoxesRight.length; i++) {
  moveBoxesRight[i].addEventListener('click', loopThrough);
  moveBoxesRight[i].addEventListener('click', changeLayer);
  moveBoxesRightTwo[i].addEventListener('click', loopThroughTwo);
  moveBoxesRightTwo[i].addEventListener('click', changeLayerTwo);
};

//This transitions from the second numbers layer to the random fortune
for (let i = 0; i < layerThreeButtons.length; i++) {
  layerThreeButtons[i].addEventListener('click', changeLayerThree);
}

//This displays a random fortune
replaceParagraph.innerHTML = randomFortune[randomizeFortunes];

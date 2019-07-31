//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');
const topBoxes = document.getElementsByClassName('moveup');
const bottomBoxes =document.getElementsByClassName('movedown');
const layerOne = document.getElementById('layer-one');


//Variables needed for toggling to get boxes to move up
const orangeBox =document.getElementById('orange');
const greenBox = document.getElementById('green');
const purpleBox = document.getElementById('purple');
const yellowBox = document.getElementById('yellow');



//Global layer two variables
const layerTwo = document.getElementById('layer-two');
const moveBoxesRightTwo = document.getElementsByClassName('moveoutright-two');
const moveBoxesLeftTwo = document.getElementsByClassName('moveoutleft-two');
const leftBoxesTwo = document.getElementById('moveleft-two');
const rightBoxesTwo = document.getElementById('moveright-two');
//const stringValue = //String.valueOf(moveBoxesLeftTwo);

//OUR FUNCTIONS FOR COLORS AND NUMBERS

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

//ABOVE ISN'T WORKING. MAYBE TRY BREAKING EACH BOX INTO ITS OWN VARIABLE AND TOGGLING IT THAT WAY?

//This is the numbers layer
function loopThroughTwo() {

  const changeSpace = () => {
    leftBoxesTwo.classList.toggle('leftover');
    rightBoxesTwo.classList.toggle('rightover');
  };
  const changeSpaceUp = () => {
    orangeBox.classList.toggle('upboxorange');
    greenBox.classList.toggle('upboxgreen');
    purpleBox.classList.toggle('downboxpurple');
    yellowBox.classList.toggle('downboxyellow');
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

//This changes the layer from colors to numbers
function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 400);

};

//Event Listeners for above functions
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

//***********THIS CONTROLS THE RANDOM FORTUNE AT THE END***********

//variables

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

//function to change from numbers to display fortune
function changeLayerTwo() {
  const swapTwo = () => {
    layerTwo.classList.add('hide');
    introParagraph.classList.add('hide');
    crystalBall.classList.remove('hide');
    replaceParagraph.classList.remove('hide');
  };
  const textContent = this.textContent;
  setTimeout(swapTwo, Number(textContent) * 2 * 400);

};

replaceParagraph.innerHTML = randomFortune[randomizeFortunes];

changeLayerTwo();

//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');
const layerOne = document.getElementById('layer-one');

//Global layer two variables
const layerTwo = document.getElementById('layer-two');
const moveBoxesRightTwo = document.getElementsByClassName('moveoutright-two');
const moveBoxesLeftTwo = document.getElementsByClassName('moveoutleft-two');
const leftBoxesTwo = document.getElementById('moveleft-two');
const rightBoxesTwo = document.getElementById('moveright-two');
//const stringValue = //String.valueOf(moveBoxesLeftTwo);

//Our Function
function loopThrough() {

  const changeSpace = () => {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  };
  for(let i =0; i < this.textContent.length * 2; i++){
    setTimeout(changeSpace, i * 400);
  }
};

function loopThroughTwo() {

  const changeSpace = () => {
    leftBoxesTwo.classList.toggle('leftover');
    rightBoxesTwo.classList.toggle('rightover');
  };
  const textContent = this.textContent;
  for(let i =0; i < Number(textContent) * 2; i++){
    setTimeout(changeSpace, i * 400);
  }
};

function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 400);

};

function changeLayerTwo() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  const textContent = this.textContent;
  setTimeout(swap, Number(textContent) * 2 * 400);

};


//Event Listener
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

//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');
const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');

//Our Function
function loopThrough() {

  const changeSpace = () => {
    leftBoxes.classList.toggle('leftover');
  };
  for(let i =0; i < this.textContent.length * 2; i++){
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


//Event Listener
for (let i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
  moveBoxesLeft[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < moveBoxesRight.length; i++) {
  moveBoxesRight[i].addEventListener('click', loopThrough);
  moveBoxesRight[i].addEventListener('click', changeLayer);
};

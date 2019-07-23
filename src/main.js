//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');
const moveBoxes = document.getElementsByClassName('move');

//Our Function
function loopThrough() {

  const changeSpace = () => {
    leftBoxes.classList.toggle('leftover');
    rightBoxes.classList.toggle('rightover');
  }

  for(let i =0; i < this.textContent.length * 2; i++){
    setTimeout(changeSpace, i * 1000);
  };
};


//Event Listener
for (let i = 0; i < moveBoxesRight.length; i++) {
  moveBoxesRight[i].addEventListener('click', loopThrough);
};

for (let i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
};

/*
for (let i = o; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click',loopThrough);
};
*/


//WANT TO TOGGLE BACK AND FORTH ON FLEXSTRETCH BETWEEN JUSTIFY CONTENT CENTER AND JUSTIFY CONTENT SPACE-BETWEEN

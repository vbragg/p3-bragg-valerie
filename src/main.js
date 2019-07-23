//Global Variables

const moveBoxesRight = document.getElementsByClassName('moveoutright');
const moveBoxesLeft = document.getElementsByClassName('moveoutleft');
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');

//Our Function
function loopThrough() {

  const changeSpace = () => {
    leftBoxes.classList.toggle('leftover');
  };

  for(let i =0; i < this.textContent.length * 2; i++){
    setTimeout(changeSpace, i * 400);
  };
};


//Event Listener
for (let i = 0; i < moveBoxesLeft.length; i++) {
  moveBoxesLeft[i].addEventListener('click', loopThrough);
};

for (let i = 0; i < moveBoxesRight.length; i++) {
  moveBoxesRight[i].addEventListener('click', loopThrough);
};

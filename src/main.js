//Global Variables

const moveBoxes = document.getElementsByClassName('moveout')
const rightBoxes = document.getElementById('moveright');
const leftBoxes = document.getElementById('moveleft');

//Our Function
function loopThrough() {

  const changeSpace = () => {
    this.classList.toggle('moveright');
    this.classList.toggle('moveleft'); //check to see if you need a ; after each line
  }
  for(let i =0; i < this.textContent.length; i++){
    changeSpace();
  }
};


//Event Listener
for (let i = 0; i < moveBoxes.length; i++) {
  moveBoxes[i].addEventListener('click', loopThrough);
};

/*
for (let i = o; i < leftBoxes.length; i++) {
  leftBoxes[i].addEventListener('click',loopThrough);
};
*/


//THIS IS NOT WORKING

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const container = document.querySelector('.container');

const initialColors = {
  box1: 'red',
  box2: 'blue',
  box3: 'pink',
  box4: 'yellow'
};  

function changeColor(event) {
  const clickedBox = event.target;
  
  if (clickedBox.id === 'box1') {
    container.style.backgroundColor = initialColors.box1;
  } else if (clickedBox.id === 'box2') {
    container.style.backgroundColor = initialColors.box2;
  } else if (clickedBox.id === 'box3') {
    container.style.backgroundColor = initialColors.box3;
  } else if (clickedBox.id === 'box4') {
    container.style.backgroundColor = initialColors.box4;
  }
}

function resetColors() {
  container.style.backgroundColor = '';
}
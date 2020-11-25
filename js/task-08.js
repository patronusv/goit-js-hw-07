'use strict';
const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.querySelector('input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
const randomRGB = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
const createBoxes = () => {
  const boxNumber = Number(inputRef.value);
  let boxSize = 30;
  for (let i = 0; i < boxNumber; i += 1) {
    const boxColor = randomRGB();
    boxesRef.insertAdjacentHTML('beforeend', `<div style="width: ${boxSize}px;height: ${boxSize}px; background-color: ${boxColor}"></div>`);
    boxSize += 10;
  }
};
const destroyBoxes = () => {
  const boxesToDestroy = boxesRef.querySelectorAll('div');
  boxesToDestroy.forEach(item => boxesRef.removeChild(item));
};
btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

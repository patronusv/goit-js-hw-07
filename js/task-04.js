'use strict';
const counterRef = document.querySelector('#value');
const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');
let counterValue = 0;
counterRef.textContent = counterValue;
const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};
btnDecrRef.addEventListener('click', decrement);
btnIncrRef.addEventListener('click', increment);

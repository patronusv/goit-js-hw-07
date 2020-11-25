'use strict';
let counterValue = 0;
const counterRef = document.querySelector('#value');
counterRef.textContent = counterValue;
const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};
const btnDecrRef = document.querySelector('[data-action="decrement"]');
btnDecrRef.addEventListener('click', decrement);
const btnIncrRef = document.querySelector('[data-action="increment"]');
btnIncrRef.addEventListener('click', increment);

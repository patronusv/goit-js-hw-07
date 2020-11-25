'use strict';
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
let output = '';
const inputToOutput = () => {
  !inputRef.value || inputRef.value === '' ? (output = 'незнакомец') : (output = inputRef.value);
  outputRef.textContent = output;
};
inputRef.addEventListener('input', inputToOutput);

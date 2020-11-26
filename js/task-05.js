'use strict';
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
let output = '';
const inputToOutput = () => {
  inputRef.value ? (output = inputRef.value) : (output = 'незнакомец');
  outputRef.textContent = output;
};
inputRef.addEventListener('input', inputToOutput);

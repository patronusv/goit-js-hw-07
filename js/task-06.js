'use strict';
const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.getAttribute('data-length'));
const validation = () => {
  //   inputRef.value.length === inputLength ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
  if (inputRef.value.length === inputLength) {
    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.replace('invalid', 'valid');
    } else {
      inputRef.classList.add('valid');
    }
  } else if (inputRef.classList.contains('valid')) {
    inputRef.classList.replace('valid', 'invalid');
  } else {
    inputRef.classList.add('invalid');
  }
  console.log(inputRef.value.length);
  console.log(inputLength);
};
inputRef.addEventListener('blur', validation);

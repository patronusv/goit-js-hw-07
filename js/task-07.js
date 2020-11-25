'use strict';
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = `${inputRef.value}px`;
const fontSize = () => {
  textRef.style.fontSize = `${inputRef.value}px`;
  console.log(Number(inputRef.value));
};
inputRef.addEventListener('input', fontSize); // плавное изменение, возможно более ресурсоёмко
// inputRef.addEventListener('click', fontSize); // не плавное изменение, возможно менее ресурсоёмко

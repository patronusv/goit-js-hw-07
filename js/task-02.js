'use strict';
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const fragment = document.createDocumentFragment();
ingredients.forEach(item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  fragment.appendChild(listItemRef);
});
const list = document.querySelector('#ingredients');
list.appendChild(fragment);

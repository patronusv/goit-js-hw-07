'use strict';
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listRef = ingredients.forEach(item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  const list = document.querySelector('#ingredients');
  list.appendChild(listItemRef);
});

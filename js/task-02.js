'use strict';
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const array = ingredients.forEach((item, index) => {
  item = document.createElement('li');
  item.textContent = ingredients[index];
  const list = document.querySelector('#ingredients');
  list.appendChild(item);
});

'use strict';
const categoriesRef = document.querySelector('#categories');
const categoriesCount = categories.children.length;
console.log(`В списке ${categoriesCount} категории`);

const itemRef = document.querySelectorAll('.item');
const itemContents = itemRef.forEach(item => {
  const itemHeading = item.querySelector('h2').textContent;
  const itemCategoriesCount = item.querySelectorAll('li').length;
  console.log(`Категория: ${itemHeading}\nКоличество элементов: ${itemCategoriesCount}`);
});

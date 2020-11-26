'use strict';
const categoriesRef = document.querySelector('#categories');
// const categoriesCount = categoriesRef.children.length;
console.log(`В списке ${categoriesRef.children.length} категории`);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item => {
  // const itemHeading = item.querySelector('h2').textContent;
  // const itemCategoriesCount = item.querySelectorAll('li').length;
  console.log(`Категория: ${item.querySelector('h2').textContent}\nКоличество элементов: ${item.querySelectorAll('li').length}`);
});
// console.log(categories);
// console.log(categoriesRef);

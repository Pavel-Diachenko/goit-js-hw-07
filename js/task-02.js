const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('ul#ingredients');
const arrayLi = ingredients.map(ingredients => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredients;
  return liEl;
});
ingredientsEl.append(...arrayLi);
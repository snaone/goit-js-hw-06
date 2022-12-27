const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allItemEl = [];
for( const element of ingredients) {
  const itemElement = document.createElement('li');
  itemElement.classList.add("item")
  itemElement.textContent = element;
  allItemEl.push(itemElement);
}
const elList = document.querySelector('#ingredients');
elList.append(...allItemEl);

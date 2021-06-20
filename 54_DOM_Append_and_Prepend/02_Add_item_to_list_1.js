/*
 * @param {string} item
 */
const addItemToShoppingList = (item) => {
  const shoppingList = document.querySelector('#shopping-list');
  shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
};

// Sample usage - do not modify
addItemToShoppingList('Paper'); // adds <li>Paper</li>
addItemToShoppingList('Orange'); // adds <li>Orange</li>
addItemToShoppingList('Peach'); // adds <li>Peach</li>

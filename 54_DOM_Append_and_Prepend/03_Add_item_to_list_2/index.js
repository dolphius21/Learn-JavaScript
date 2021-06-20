/*
 * @param {string} item
 */
const addItemToShoppingList = (item) => {
  const shoppingList = document.querySelector('#shopping-list');
  shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
};

// Sample usage - do not modify
const form = document.querySelector('#shopping-form');
const input = document.querySelector('#item-name');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // call addItemToShoppingList with what's written inside the textbox
  addItemToShoppingList(input.value);
  input.value = '';
});

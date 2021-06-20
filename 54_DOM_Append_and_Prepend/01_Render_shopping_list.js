/*
 * @param {string[]} items
 */
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('#shopping-list');
  items.forEach((item) => {
    shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</Li>`);
  });
};

// Sample usage - do not modify
const sampleList = ['Orange', 'Banana', 'Coffee', 'Paper'];
console.log(renderShoppingList(sampleList));

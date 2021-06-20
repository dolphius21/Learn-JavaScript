const init = () => {
  // TODO: fetch shopping list items and render <li> elements
  const shoppingList = document.querySelector('#shopping-list');

  fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json'
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        shoppingList.insertAdjacentHTML('beforeend', `<li>${item.item}</li>`);
      });
    });
};

// Sample usage - do not modify
init();

/*
 * @param {Object[]} products
 * @param {number} products.price
 * @param {number} products.quantity
 */
const getCartTotal = (products) => {
  return products.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
};

// Sample usage - do not modify
const sampleProducts = [
  {
    price: 10,
    quantity: 3
  },
  {
    price: 5,
    quantity: 4
  }
];
console.log(getCartTotal(sampleProducts)); // 50

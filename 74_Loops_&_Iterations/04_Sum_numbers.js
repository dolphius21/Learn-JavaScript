/*
 * @param {number[]} numbers
 */
const sumNumbers = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

// Sample usage - do not modify
console.log(sumNumbers([1, 2, 3, 4, 5]));
console.log(sumNumbers([10, 4, 6, 3]));

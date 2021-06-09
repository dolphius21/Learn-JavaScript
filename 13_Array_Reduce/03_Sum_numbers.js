/*
 * @param {number[]} numbers
 */
const sumNumbers = (numbers) => {
  return numbers.reduce((total, currNum) => total + currNum, 0);
};

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])); // 60
console.log(sumNumbers([2, 4, 2, 10])); // 18

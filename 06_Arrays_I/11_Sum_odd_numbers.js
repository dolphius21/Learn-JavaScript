/*
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      sum += number;
    }
  });
  return sum;
}

// Sample usage - do not modify
// console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([15, -5, 12])); // 20
// console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8

/*
 * @param {string[]} strings
 */
const getStringSizes = (strings) => {
  return strings.map((str) => str.length);
};

// Sample usage - do not modify
console.log(getStringSizes(['a', 'abc'])); // [1, 3]
console.log(getStringSizes(['Sam', 'Alex', 'Charlie'])); // [3, 4, 7]
console.log(getStringSizes(['Hello', 'Blue'])); // [5, 4]

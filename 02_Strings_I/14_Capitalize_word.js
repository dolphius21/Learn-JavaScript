/*
 * @param {string} word
 */
function capitalize(word) {
  const lowerCased = word.toLowerCase();
  const firstLetter = lowerCased[0].toUpperCase();
  return firstLetter + lowerCased.substring(1);
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"

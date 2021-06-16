import numericHelper from './numeric-helper';

/*
 * @param {number} number
 */
const isEvenNumber = (number) => {
  // Use NumericHelper's isEven method to check if it's even
  const numHelper = new numericHelper(number);
  return numHelper.isEven();
};

// Sample usage - do not modify
console.log(isEvenNumber(2)); // true
console.log(isEvenNumber(3)); // false

/*
 * @param {number[]} temperatures
 */
const getFreezingTemperatures = (temperatures) => {
  return temperatures.filter((temperature) => temperature < 0);
};

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]

/*
 * @param {string} text
 */
const getUnit = (text) => {
  return text.includes('°C')
    ? 'Celsius'
    : text.includes('°F')
    ? 'Fahrenheit'
    : 'N/A';
};

// Sample usage - do not modify
console.log(getUnit('It is 15°C today')); // Celsius
console.log(getUnit('It was 90°F yesterday')); // Fahrenheit
console.log(getUnit('Why is it 20°C')); // Celsius
console.log(getUnit("Are you sure that it'll be 55°F?")); // Fahrenheit
console.log(getUnit('It is expected to be cold.')); // N/A

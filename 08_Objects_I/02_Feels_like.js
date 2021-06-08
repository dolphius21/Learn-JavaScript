/*
 * @param {Object} city
 * @param {string} city.name
 * @param {number} city.value
 */
function getWeather(city) {
  return `It's currently ${city.value} degrees in ${city.name}`;
}

// Sample usage - do not modify
console.log(getWeather({ name: 'Amsterdam', value: 3 })); // "It's currently 3 degrees in Amsterdam"
console.log(getWeather({ name: 'Brasilia', value: 24 })); // "It's currently 24 degrees in Brasilia"

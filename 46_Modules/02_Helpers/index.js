import { Helpers } from './helpers.js';
/**
 * @param {string} name
 */
const capitalizeName = (name) => {
  // Use Helper's capitalize method to capitalize name
  const helpers = new Helpers(name);
  return helper.capitalize();
};

// Sample usage - do not modify
console.log(capitalizeName('AlEx')); // Alex
console.log(capitalizeName('chARLEY')); // Charley

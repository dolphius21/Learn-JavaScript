/*
 * @param {array} apps
 */
function useCalculator(apps) {
  return [...apps, 'Calculator'];
}

// Sample usage - do not modify
console.log(useCalculator(['Clock', 'Twitter'])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(['Weather'])); // ["Weather", "Calculator"]

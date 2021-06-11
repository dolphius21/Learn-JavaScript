/*
 * @param {Object} config
 * @param {boolean} config.darkTheme
 */
const cloneConfig = (config) => {
  return { ...config };
};

// Sample usage - do not modify
const originalConfig = {
  darkTheme: true
};
const result = cloneConfig(originalConfig);
console.log(result); // {darkTheme: true} (new object)
console.log(originalConfig === result); // false (they're not the same)

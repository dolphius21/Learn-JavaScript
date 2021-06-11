/*
 * @param {Object} config
 * @param {boolean} config.darkTheme
 */
const enableDarkTheme = (config) => {
  return { ...config, darkTheme: true };
};

// Sample usage - do not modify
const config = {
  darkTheme: false
};
console.log(enableDarkTheme(config)); // {darkTheme: true} (new object)

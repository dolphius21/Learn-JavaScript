/*
 * @param {string} name
 */
const delayedWelcome = (name) => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 1000);
};

// Sample usage - do not modify
console.log(delayedWelcome('Sam'));
console.log(delayedWelcome('Alex'));

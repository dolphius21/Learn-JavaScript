/*
 * @param {string} message
 */
const getMessage = (message) => {
  return message.endsWith('.') ? message : message + '.';
};

// Sample usage - do not modify
console.log(getMessage('Hello world')); // "Hello world."
console.log(getMessage('Welcome home.')); // "Welcome home."
console.log(getMessage('It works')); // "It works."
console.log(getMessage('Yes. Correct')); // "Yes. Correct."

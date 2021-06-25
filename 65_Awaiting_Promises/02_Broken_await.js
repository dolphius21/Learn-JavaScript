/*
 * @param {number} milliseconds
 */
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

const init = async () => {
  console.log('Hello World');
  await wait(1000);
  console.log('Hello after 1 second');
};

// Sample usage - do not modify
console.log(init());

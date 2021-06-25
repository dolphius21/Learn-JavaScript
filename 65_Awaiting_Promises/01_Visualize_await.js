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
  console.log('A');
  await wait(1000);
  console.log('B');
  await wait(1000);
  console.log('C');
};

init();

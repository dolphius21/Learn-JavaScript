const waitForCompleteClick = () => {
  return new Promise((resolve, reject) => {
    document.querySelector('#complete-btn').addEventListener('click', () => {
      resolve();
    });
    document.querySelector('#fail-btn').addEventListener('click', () => {
      reject();
    });
  });
};

waitForCompleteClick()
  .then(() => console.log('Complete clicked'))
  .catch(() => console.error('Fail clicked'));

console.log('Complete clicked');
console.error('Fail clicked');

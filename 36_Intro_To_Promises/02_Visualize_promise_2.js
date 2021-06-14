const randomWait = () => {
  return new Promise((resolve) => {
    // https://codetogo.io/how-to-get-random-number-between-two-numbers-in-javascript/
    const min = 1;
    const max = 4;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`waiting ${rand} second${rand > 1 ? 's' : ''}`);
    setTimeout(() => {
      resolve();
    }, rand * 1000);
  });
};

console.log('A');
randomWait().then(() => {
  // this runs when the randomWait() function has completed successfully
  console.log('B');
});
console.log('C');

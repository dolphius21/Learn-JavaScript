const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

console.log('A');
wait(1000).then(() => {
  // this runs when the wait(milliseconds) function has completed successfully
  console.log('B');
});
console.log('C');

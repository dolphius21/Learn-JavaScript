// TODO: implement wait
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

// Sample usage - do not modify
wait(1000).then(() => {
  console.log('Done waiting.');
});

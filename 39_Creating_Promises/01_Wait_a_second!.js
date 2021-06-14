const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log('Done waiting.');
});

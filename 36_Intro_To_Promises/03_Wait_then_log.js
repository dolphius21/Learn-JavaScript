const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

const init = () => {
  console.log('Program started');
  wait(1000).then(() => console.log('Waited 1 second'));
};

// Sample usage (do not modify)
init();

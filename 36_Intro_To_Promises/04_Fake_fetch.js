const fakeFetch = () => {
  return new Promise((resolve) => {
    // https://codetogo.io/how-to-get-random-number-between-two-numbers-in-javascript/
    const min = 1;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      resolve();
    }, rand * 1000);
  });
};

const init = () => {
  fakeFetch().then(() => console.log('Fake fetch completed'));
};

// Sample usage (do not modify)
init();

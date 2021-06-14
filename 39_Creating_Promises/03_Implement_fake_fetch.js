const fakeFetch = (milliseconds) => {
  // TODO: implement fake fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        departed: false,
        delayed: true
      });
    }, milliseconds);
  });
};

// Sample usage - do not modify
fakeFetch().then((data) => {
  console.log(data);
});

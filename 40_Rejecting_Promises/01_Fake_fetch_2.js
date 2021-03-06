const fakeFetch = (endpoint) => {
  // TODO: implement fake fetch
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint !== 'flight-status') {
        reject('endpoint not supported.');
      }
      resolve({
        departed: false,
        delayed: true
      });
    }, 1000);
  });
};

// Sample usage - do not modify
fakeFetch('flight-status')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

fakeFetch('user-details')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

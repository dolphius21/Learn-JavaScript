/*
 * @param {number} milliseconds
 */
const fakeFetch = (endpoint) => {
  return new Promise((resolve, reject) => {
    if (endpoint !== 'flight-status') {
      reject('Invalid endpoint. Only flight-status is supported.');
    }
    // https://codetogo.io/how-to-get-random-number-between-two-numbers-in-javascript/
    const min = 1;
    const max = 2;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;

    const dataToResolve = {
      departed: false,
      delayed: true
    };

    setTimeout(() => {
      resolve(dataToResolve);
    }, rand);
  });
};

const logUserDetails = async () => {
  // TODO using async/await
  try {
    const data = await fakeFetch('user-details');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

// Sample usage (do not modify)
logUserDetails();

const getDate = () => {
  // this function fails 50% of the time
  if (Math.random() < 0.5) {
    // fail
    throw Error('An error has occurred');
  } else {
    //return current date
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
};

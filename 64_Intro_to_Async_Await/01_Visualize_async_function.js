const getRandomNumber = async () => {
  // calculates random number between 0 and 9
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

// Sample usage - do not modify
getRandomNumber().then((value) => {
  console.log(value);
});

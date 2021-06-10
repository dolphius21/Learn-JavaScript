const showDate = () => {
  try {
    return getDate();
  } catch (err) {
    return 'Could not get date';
  }
};

// Sample usage - do not modify
console.log(showDate());

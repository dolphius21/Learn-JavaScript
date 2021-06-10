const runCode = () => {
  console.log('Step 1');
  try {
    getData();
  } catch (err) {
    console.error(err);
  }
  console.log('Step 2');
};

// Sample usage - do not modify
runCode();

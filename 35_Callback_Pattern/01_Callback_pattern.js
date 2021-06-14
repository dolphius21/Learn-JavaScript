const welcomeUser = (name, callback) => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    if (callback) {
      callback(); // call the success callback
    }
  }, 1000);
};

const sayHello = (name) => {
  welcomeUser(name, () => {
    console.log('Done!');
  });
};

// Sample usage - do not modify
sayHello('Sam');

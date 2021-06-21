const initClickGreeting = () => {
  const btn = document.querySelector('#my-button');
  btn.addEventListener('click', () => {
    console.log('Welcome!');
  });
};

// Sample usage - do not modify
initClickGreeting();

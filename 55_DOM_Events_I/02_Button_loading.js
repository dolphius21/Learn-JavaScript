const initGetWeather = () => {
  const btn = document.querySelector('#my-button');
  btn.addEventListener('click', () => {
    btn.textContent = 'Loading...';
  });
};

// Sample usage - do not modify
initGetWeather();

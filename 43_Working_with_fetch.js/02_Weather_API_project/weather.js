const getWeather = (city) => {
  // TODO: fetch the correct url depending on city and call showTemperature with the temperature
  const endpoint = `https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => showTemperature(data.current.temperature));
};

// Do NOT modify the code below
const result = document.querySelector('#result');
const showTemperature = (temperature) => {
  result.textContent = `It's ${temperature} degrees celsius.`;
};

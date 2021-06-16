import FetchWrapper from './fetch-wrapper.js';

export const getWeather = (city) => {
  // TODO: fetch the correct url depending on city and call showTemperature with the temperature
  const fetchAPI = new FetchWrapper(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app'
  );
  fetchAPI
    .get(`/weatherstack/${city}.json`)
    .then((data) => showTemperature(data.current.temperature));
};

// Do NOT modify the code below
const result = document.querySelector('#result');
const showTemperature = (temperature) => {
  result.textContent = `It's ${temperature} degrees celsius.`;
};

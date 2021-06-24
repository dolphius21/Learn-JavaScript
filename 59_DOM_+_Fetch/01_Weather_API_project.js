// TODO
import FetchWrapper from './fetch-wrapper.js';
const citiesDropdown = document.querySelector('#cities-dropdown');
const result = document.querySelector('#weather-result');

const url =
  'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app';

const API = new FetchWrapper(url);

citiesDropdown.addEventListener('change', () => {
  API.get(`/weatherstack/${citiesDropdown.value}.json`).then((data) => {
    result.textContent = `It's ${data.current.temperature} degrees celsius.`;
  });
});

import { getWeather } from './weather.js';

const citiesDropdown = document.querySelector('#cities-dropdown');

citiesDropdown.addEventListener('change', () => {
  getWeather(citiesDropdown.value);
});
getWeather(citiesDropdown.value);

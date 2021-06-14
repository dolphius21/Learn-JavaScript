const loader = document.querySelector('#app-loader');

const getWeatherDescription = (city) => {
  return new Promise((resolve, reject) => {
    if (!city || typeof city !== 'string') {
      reject('City must be a string');
    }
    if (!['amsterdam', 'tokyo'].includes(city.toLowerCase())) {
      reject('City must be Amsterdam or Tokyo');
    }
    // simulate network request
    setTimeout(() => {
      if (city.toLowerCase() === 'amsterdam') {
        resolve('Cloudy');
      }
      if (city.toLowerCase() === 'tokyo') {
        resolve('Sunny');
      }
    }, 1000);
  });
};

const startLoader = () => {
  loader.innerHTML = '<h1>Loading...</h1>';
};

const stopLoader = () => {
  loader.innerHTML = '';
};

/*
 * @param {string} cityName
 */
const logWeatherDescription = (cityName) => {
  startLoader();
  getWeatherDescription(cityName)
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => stopLoader());
};

// Sample usage - do not modify
logWeatherDescription('Amsterdam'); // will eventually log "Cloudy"
logWeatherDescription('Tokyo'); // will eventually log "Sunny"
logWeatherDescription('Patagonia'); // will eventually fail

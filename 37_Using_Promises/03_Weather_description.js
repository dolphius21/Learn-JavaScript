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

/*
 * @param {string} cityName
 */
const logWeatherDescription = (cityName) => {
  getWeatherDescription(cityName).then((data) => console.log(data));
};

// Sample usage - do not modify
logWeatherDescription('Amsterdam'); // will eventually log "Cloudy"
logWeatherDescription('Tokyo'); // will eventually log "Sunny"

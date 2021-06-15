/*
 * @param {string} weatherApiResponse
 */
const willItRain = (weatherApiResponse) => {
  const res = JSON.parse(weatherApiResponse);
  return res.now.rainExpected;
};

// Sample usage - do not modify
console.log(
  willItRain(
    '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'
  )
); // true
console.log(
  willItRain(
    '{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'
  )
); // false

/*
 * @param {Object[]} recordings
 * @param {string} recordings.date
 * @param {number} recordings.temperature
 */
const getTemperatures = (recordings) => {
  return recordings.map((recording) => recording.temperature);
};

// Sample usage - do not modify
const recordings = [
  {
    date: '2020-01-03',
    temperature: 3
  },
  {
    date: '2020-01-04',
    temperature: -4
  }
];
console.log(getTemperatures(recordings)); // [3, -4]

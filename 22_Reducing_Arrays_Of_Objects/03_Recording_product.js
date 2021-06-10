/*
 * @param {Object[]} recordings
 * @param {number} recordings.value
 */
const getProduct = (recordings) => {
  return recordings.reduce((product, currRecording) => {
    return product * currRecording.value;
  }, 1);
};

// Sample usage - do not modify
const sampleRecordings = [
  {
    value: 2
  },
  {
    value: 5
  }
];
console.log(getProduct(sampleRecordings)); // 10

/*
 * @param {Object[]} users
 * @param {string} users.joined_on
 * @param {number} users.age
 */
const getAverageAge = (users) => {
  const sum = users.reduce((total, currUser) => total + currUser.age, 0);
  return sum / users.length;
};

// Sample usage - do not modify
const users = [
  {
    joined_on: '2018-12-13',
    age: 14
  },
  {
    joined_on: '2018-12-15',
    age: 18
  }
];
console.log(getAverageAge(users)); // 16

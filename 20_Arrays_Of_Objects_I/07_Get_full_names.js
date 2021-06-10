/*
 * @param {Object[]} users
 */
const getFullNames = (users) => {
  return users.map((user) =>
    `${user.firstName} ${user.lastName}`.toUpperCase()
  );
};

// Sample usage - do not modify
const users = [
  {
    id: 1,
    firstName: 'Sam',
    lastName: 'Green'
  },
  {
    id: 2,
    firstName: 'Alex',
    lastName: 'Blue'
  }
];
console.log(getFullNames(users)); // ["SAM GREEN", "ALEX BLUE"]

/*
 * @param {number} id
 * @param {string} name
 */
const getUser = (id, name) => {
  return { id, name };
};

// Sample usage - do not modify
console.log(getUser(2, 'Sam')); // {id: 2, name: "Sam"}
console.log(getUser(5, 'Alex')); // {id: 5, name: "Alex"}

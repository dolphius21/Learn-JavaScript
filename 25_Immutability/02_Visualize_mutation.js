/*
 * @param {Object} user
 * @param {number} user.id
 * @param {number} user.age
 */
const incrementAge = (user) => {
  return (user.age += 1);
};

// Sample usage - do not modify
const sampleUser = {
  id: 1,
  age: 23
};
incrementAge(sampleUser);
console.log(sampleUser); // notice how that gets mutated

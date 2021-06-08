/*
 * @param {Object[]} person
 * @param {string} person[].firstName
 * @param {string} person[].lastName
 * @param {number} person[].age
 */
function incrementAge(person) {
  person.age += 1;
  return person;
}

// Sample usage - do not modify
const person = {
  firstName: 'Jennifer',
  lastName: 'Doe',
  age: 18
};
console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}

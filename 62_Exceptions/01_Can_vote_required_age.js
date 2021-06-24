/*
 * @param {number} age
 */
const canVote = (age) => {
  if (!age) {
    throw new Error('age is required');
  }
  return age >= 18;
};

// Sample usage - do not modify
console.log(canVote(20)); // true
console.log(canVote(14)); // false
try {
  canVote();
} catch (error) {
  console.error(error); // Error: "age is required"
}

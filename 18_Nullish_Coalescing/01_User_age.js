/*
 * @param {object} user
 * @param {number} [user.age]
 */
const getAge = (user) => {
  return user.age ?? 'unknown';
};

// Sample usage - do not modify
console.log(getAge({ age: 19 })); // 19
console.log(getAge({})); // "unknown"

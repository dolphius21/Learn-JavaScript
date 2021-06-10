/*
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = (user) => {
  return user.info?.name ?? 'N/A';
};

// Sample usage - do not modify
console.log(getFullName({ info: { name: 'Sam' } })); // "Sam"
console.log(getFullName({ info: null })); // "N/A"
console.log(getFullName({})); // "N/A"

/*
 * @param {object[]} users
 * @param {number} users.id
 * @param {string} users.name
 * @param {object} [users.subscription]
 * @param {object} [users.subscription.info]
 * @param {number} [users.subscription.info.value]
 */
const getTotalSales = (users) => {
  return users.reduce((total, currUser) => {
    return total + (currUser.subscription?.info?.value ?? 0);
  }, 0);
};

// Sample usage - do not modify
const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Sam', subscription: { info: { value: 59 } } },
  { id: 3, name: 'Charlie', subscription: { info: { value: 31 } } }
];
console.log(getTotalSales(users)); // 90

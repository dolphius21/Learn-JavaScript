/*
 * @param {number[]} ages
 */
function getVotersCount(ages) {
  return ages.filter((age) => age >= 18).length;
}

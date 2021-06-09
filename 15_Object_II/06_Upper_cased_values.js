/*
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const getUpperCasedValues = (course) => {
  return Object.values(course).map((value) => value.toUpperCase());
};

// Sample usage - do not modify
console.log(getUpperCasedValues({ name: 'Learn JavaScript' })); // ["LEARN JAVASCRIPT"]
console.log(
  getUpperCasedValues({ name: 'Learn JavaScript', category: 'Programming' })
); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
console.log(getUpperCasedValues({})); // []

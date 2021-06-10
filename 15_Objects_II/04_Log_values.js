/*
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const logValues = (course) => {
  const keys = Object.keys(course);
  keys.forEach((key) => console.log(course[key]));
};

// Sample usage - do not modify
logValues({ id: 1, name: 'Learn JavaScript', year: 2021 }); // should log (separately): 1, "Learn JavaScript" and 2021

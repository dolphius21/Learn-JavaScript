/*
 * @param {Object[]} courses
 * @param {number} courses.id
 * @param {string} courses.name
 * @param {boolean} courses.isCompleted
 */
const getCompletedCourses = (courses) => {
  return courses.filter((course) => course.isCompleted === true);
};

// Sample usage - do not modify
const sampleCourses = [
  {
    id: 1,
    name: 'Learn Programming',
    isCompleted: true
  },
  {
    id: 2,
    name: 'Learn JavaScript',
    isCompleted: false
  }
];
console.log(getCompletedCourses(sampleCourses));

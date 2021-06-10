/*
 * @param {Object[]} grades
 * @param {string} grades.date
 * @param {number} grades.grade
 */
const getSumOfGrades = (results) => {
  return results.reduce((total, currResult) => total + currResult.grade, 0);
};

// Sample usage - do not modify
const results = [
  {
    date: '2018-12-13',
    grade: 14
  },
  {
    date: '2018-12-15',
    grade: 18
  }
];
console.log(getSumOfGrades(results)); // 32

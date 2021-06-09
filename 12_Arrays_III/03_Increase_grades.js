/*
 * @param {number[]} grades
 */
const shouldAdjustGrades = (grades) => {
  return grades.some((grade) => grade < 10);
};

// Sample usage - do not modify
shouldAdjustGrades([10, 12, 10, 14]); // false
shouldAdjustGrades([12, 8, 17]); // true

/*
 * @param {number[]} grades
 */
const shouldCancelExam = (grades) => {
  return grades.every((grade) => grade >= 18);
};

// Sample usage - do not modify
shouldCancelExam([10, 12, 10, 14]); // false
shouldCancelExam([18, 4]); // false
shouldCancelExam([19, 18, 18]); // true

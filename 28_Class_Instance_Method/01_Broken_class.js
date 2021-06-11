// class definition
class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  getDescription() {
    if (this.isCompleted) {
      return `You have completed the ${this.name} course.`;
    } else {
      return `You are currently studying the ${this.name} course.`;
    }
  }
}

// Sample usage - do not modify
const course1 = new Course('Learn JavaScript', false);
console.log(course1.getDescription()); // "You are currently studying the Learn JavaScript course"
const course2 = new Course('Learn Programming', true);
console.log(course2.getDescription()); // "You have completed the Learn Programming course"

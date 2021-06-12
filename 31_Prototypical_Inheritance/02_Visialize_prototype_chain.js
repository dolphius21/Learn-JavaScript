class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

  updateConfig() {
    return 'Config updated';
  }
}

const admin = new Admin('Alex', 'Blue', 20);

console.log(admin); // current instance
console.log(Object.getPrototypeOf(admin)); // Admin's prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(admin))); // User's prototype
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(admin)))
); // Object prototype
console.log(
  Object.getPrototypeOf(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(admin)))
  )
); // null

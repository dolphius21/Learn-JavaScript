// TODO: define classes here
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  canVote() {
    return this.age >= 18 ? true : false;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
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

// Sample usage - do not modify
const user = new User('Sam', 'Green', 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"
const admin = new Admin('Alex', 'Blue', 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"

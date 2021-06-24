class User {
  constructor(age) {
    this.age = age;
  }

  getInfo() {
    const isLegal = () => {
      return this.age >= 18;
    };

    return {
      age: this.age,
      isLegal: isLegal()
    };
  }
}

// sample usage - do not modify
const user = new User(20);
console.log(user.getInfo());

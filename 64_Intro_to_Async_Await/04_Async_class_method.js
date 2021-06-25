class User {
  constructor(age) {
    this.age = age;
  }

  async canVote() {
    return this.age >= 18;
  }
}

// Sample usage - do not modify
const user = new User(20);
user.canVote().then((result) => {
  console.log(result); // true
});

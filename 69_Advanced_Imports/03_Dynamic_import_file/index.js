import('./user-helpers.js').then((module) => {
  const User = module.default;
  const canVote = module.canVote;

  const user = new User('Sam', 'Green');
  console.log(user.getFullName()); // Sam Green
  console.log(canVote(20)); // true
});

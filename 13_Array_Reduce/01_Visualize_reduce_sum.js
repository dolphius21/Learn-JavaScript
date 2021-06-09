let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
  console.log(`Total is ${total}`);
  console.log(`Current is ${current}`);
  console.log('---');
  return total + current;
}, 0);

console.log(`Sum is ${sum}`);

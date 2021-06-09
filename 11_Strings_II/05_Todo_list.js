/*
 * @param {string} todos
 */
const getCountTodos = (todos) => {
  return todos.split(',').length;
};

// Sample usage - do not modify
console.log(getCountTodos('Laundry,Wash dishes,Clean table')); // 3
console.log(getCountTodos('Feed cat,Degrease bike chain')); // 2

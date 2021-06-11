class Tasks {
  /*
   * @param {string[]} todos
   */
  constructor(todos) {
    this._todos = todos;
  }
  get todos() {
    return this._todos.join(', ');
  }
}

// Sample usage - do not modify
const tasks = new Tasks(['Laundry', 'Clean kitchen']);
console.log(tasks.todos); // "Laundry, Clean kitchen"

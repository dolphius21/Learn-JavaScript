import { Component } from '@angular/core';

@Component({
  selector: 'todo-component',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    this.tasks.push({
      text: task
    });
  }

  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}

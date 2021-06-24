// TODO
import FetchWrapper from './fetch-wrapper.js';

const todo = document.querySelector('#todo-title');
const todoCategory = document.querySelector('#todo-category');
const form = document.querySelector('#todo-form');
const todoList = document.querySelector('#todos-list');

const url = 'https://api.learnjavascript.online/demo/';
const API = new FetchWrapper(url);

const getTodos = () => {
  API.get('todos').then((data) => {
    data.todos.forEach((todo) => {
      todoList.insertAdjacentHTML(
        'beforeend',
        `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`
      );
    });
  });
};

getTodos();

form.addEventListener('submit', () => {
  API.put('todos', { title: todo.value, category: todoCategory.value }).then(
    (data) => getTodos()
  );
});

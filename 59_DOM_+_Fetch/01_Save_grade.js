// TODO
import FetchWrapper from './fetch-wrapper.js';

const userGrade = document.querySelector('#user-grade');
const form = document.querySelector('#grades-form');

const url = 'https://api.learnjavascript.online/demo/';
const API = new FetchWrapper(url);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  API.put('grades.json', { grade: userGrade.value }).then((data) =>
    console.log(data)
  );
});

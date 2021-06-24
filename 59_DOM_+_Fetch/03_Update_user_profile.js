// TODO
import FetchWrapper from './fetch-wrapper.js';

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const form = document.querySelector('#user-form');

const url = 'https://api.learnjavascript.online/demo/';
const API = new FetchWrapper(url);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  API.post('user.json', {
    firstName: firstName.value,
    lastName: lastName.value
  }).then((data) => console.log(data));
});

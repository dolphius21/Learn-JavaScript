import FetchWrapper from './fetch-wrapper.js';

const updateUserProfile = (firstName, lastName) => {
  // TODO
  const fetchAPI = new FetchWrapper('https://api.learnjavascript.online/demo');
  fetchAPI
    .post('/user.json', { firstName, lastName })
    .then((data) => console.log(data));
};

// Sample usage - do not modify
const form = document.querySelector('#user-form');
const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  updateUserProfile(fName.value, lName.value);
});

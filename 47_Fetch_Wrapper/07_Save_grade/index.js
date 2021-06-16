import FetchWrapper from './fetch-wrapper.js';

const saveGrade = (grade) => {
  // TODO
  const fetchAPI = new FetchWrapper('https://api.learnjavascript.online/demo');
  fetchAPI.put('/grades.json', { grade });
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveGrade(userGrade.value);
});

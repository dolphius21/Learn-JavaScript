const saveGrade = (grade) => {
  // TODO
  fetch('https://api.learnjavascript.online/demo/grades.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grade
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveGrade(userGrade.value);
});

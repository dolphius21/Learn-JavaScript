const saveGrade = async (grade) => {
  // TODO using async/await
  const url = 'https://api.learnjavascript.online/demo/grades.json';
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ grade })
  });
  const data = await res.json();
  console.log(data);
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveGrade(userGrade.value);
});

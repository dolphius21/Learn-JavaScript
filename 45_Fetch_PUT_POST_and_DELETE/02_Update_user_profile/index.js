const updateUserProfile = (firstName, lastName) => {
  // TODO
  fetch('https://api.learnjavascript.online/demo/user.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName
    })
  })
    .then((res) => {
      if (res.ok !== true) {
        throw new Error('API error...');
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// Sample usage - do not modify
const form = document.querySelector('#user-form');
const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  updateUserProfile(fName.value, lName.value);
});

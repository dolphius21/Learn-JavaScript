// TODO: call the completeRegistration function with the user input when the form is submitted
const form = document.querySelector('#register-form');
const name = document.querySelector('#register-name');
const email = document.querySelector('#register-email');
const password = document.querySelector('#register-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  completeRegistration(name.value, email.value, password.value);
});

// Do not modify this function
function completeRegistration(name, email, password) {
  console.log({ name, email, password });
}

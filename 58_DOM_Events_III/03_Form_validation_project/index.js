// TODO: add 'success' class on #user-name when the user leaves the input and it has at least 6 characters otherwise add the class 'error'
const username = document.querySelector('#user-name');

username.addEventListener('blur', () => {
  if (username.value.length >= 6) {
    username.classList.remove('error');
    username.classList.add('success');
  } else {
    username.classList.remove('success');
    username.classList.add('error');
  }
});

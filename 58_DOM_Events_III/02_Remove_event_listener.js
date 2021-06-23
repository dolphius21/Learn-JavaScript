const button = document.querySelector('#my-button');

const handleClick = (e) => {
  console.log(e.currentTarget.textContent);
};

button.addEventListener('click', handleClick);

setTimeout(() => {
  // TODO: remove the event listener from above
  button.removeEventListener('click', handleClick);
}, 1500);

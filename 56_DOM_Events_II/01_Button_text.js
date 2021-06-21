// TODO: log the button's textContent when it's clicked
const btn = document.querySelector('#my-button');

btn.addEventListener('click', (e) => console.log(e.currentTarget.textContent));

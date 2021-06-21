// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>
const btn = document.querySelector('#theme-btn');

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

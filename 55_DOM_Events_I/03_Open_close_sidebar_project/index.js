// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const sidebar = document.querySelector('#app-sidebar');
const btn = document.querySelector('#menu-sidebar');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

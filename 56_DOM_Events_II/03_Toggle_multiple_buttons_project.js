// TODO: toggle the class active on any of the buttons whenever they get clicked
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
  });
});

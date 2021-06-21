// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    document.querySelector('.active')?.classList.remove('active');
    e.currentTarget.classList.add('active');
  });
});

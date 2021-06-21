// TODO: When the user clicks on a `.card``, it should add/remove the class `active`
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
  });
});

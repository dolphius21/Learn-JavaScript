// TODO: implement tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    document.querySelector('.active')?.classList.remove('active');
    e.currentTarget.classList.add('active');
    document.querySelector('.show')?.classList.remove('show');
    const id = e.currentTarget.dataset.content;
    document.querySelector(id).classList.add('show');
  });
});

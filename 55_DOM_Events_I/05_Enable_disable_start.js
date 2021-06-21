// TODO: Clicking on 'Disable start' should disable the 'Start' button and clicking on 'Enable start' should enable the 'Start' button.
const enableBtn = document.querySelector('#btn-enable');
const disableBtn = document.querySelector('#btn-disable');
const startBtn = document.querySelector('#btn-start');

enableBtn.addEventListener('click', () => startBtn.removeAttribute('disabled'));

disableBtn.addEventListener('click', () =>
  startBtn.setAttribute('disabled', 'disabled')
);

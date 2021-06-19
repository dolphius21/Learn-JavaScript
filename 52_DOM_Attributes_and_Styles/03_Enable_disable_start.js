/*
 * @param {HTMLButtonElement} button
 */
const disableButton = (button) => {
  button.setAttribute('disabled', 'disabled');
};

/**
 * @param {HTMLButtonElement} button
 */
const enableButton = (button) => {
  button.removeAttribute('disabled');
};

// Sample usage - do not modify
const enable = document.querySelector('#btn-enable');
const disable = document.querySelector('#btn-disable');
const start = document.querySelector('#btn-start');
enable.addEventListener('click', () => enableButton(start));
disable.addEventListener('click', () => disableButton(start));

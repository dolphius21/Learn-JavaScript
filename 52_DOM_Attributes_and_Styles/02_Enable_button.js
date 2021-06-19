/*
 * @param {HTMLButtonElement} button
 */
const enableButton = (button) => {
  button.removeAttribute('disabled');
};

// Sample usage - do not modify
enableButton(document.querySelector('#button1'));
enableButton(document.querySelector('#button2'));
enableButton(document.querySelector('#button3'));

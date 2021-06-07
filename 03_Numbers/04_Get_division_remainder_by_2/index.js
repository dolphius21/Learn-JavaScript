const number = document.querySelector('#your-number');
const output = document.querySelector('#output');

number.addEventListener('keyup', () => {
  output.textContent = getDivisionRemainderBy2(number.value);
});

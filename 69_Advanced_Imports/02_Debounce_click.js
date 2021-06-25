import { debounce } from 'lodash-es';

const button = document.querySelector('#my-button');

button.addEventListener(
  'click',
  debounce(() => {
    console.log('Button clicked');
  }, 150)
);

import { debounce } from 'lodash-es';
import { format, addYears } from 'date-fns';

window.addEventListener(
  'scroll',
  debounce(() => {
    console.log('User has scrolled');
  }, 30)
);

const date = new Date();
console.log(date);

const futureDate = addYears(date, 5).toDateString();
document.querySelector('h2').textContent = futureDate;

import { data } from './data.js';

// TODO: implement instant search
const search = document.querySelector('#app-search');
const results = document.querySelector('#results-list');

const render = (query = '') => {
  const cleanedupQuery = query.toLowerCase().trim();

  const filtered = data.filter((item) => {
    return item.spacecraft.toLowerCase().includes(cleanedupQuery);
  });

  results.innerHTML = '';

  filtered.forEach((item) => {
    results.insertAdjacentHTML('beforeend', `<li>${item.spacecraft}</li>`);
  });
};

search.addEventListener('keyup', () => {
  render(search.value);
});

render();

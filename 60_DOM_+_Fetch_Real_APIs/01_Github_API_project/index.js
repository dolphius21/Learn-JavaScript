// TODO
import FetchWrapper from './fetch-wrapper.js';
import { startLoader, stopLoader } from './helpers.js';

const username = document.querySelector('#github-username');
const form = document.querySelector('#repos-form');
const button = document.querySelector('#get-repos');
const repos = document.querySelector('#repos-list');

const url = 'https://api.github.com';
const API = new FetchWrapper(url);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  startLoader(button);
  API.get(`/users/${username.value}/repos`)
    .then((data) => {
      repos.innerHTML = '';
      data.forEach((repo) => {
        repos.insertAdjacentHTML(
          'beforeend',
          `<li>
            <a href="${repo.html_url}" target="_blank">
              <h2>${repo.full_name}</h2>
              <p>${repo.description}</p>
            </a>
          </li>`
        );
      });
    })
    .finally(() => stopLoader(button, 'Get repos'));
});

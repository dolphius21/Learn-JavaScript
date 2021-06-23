// TODO: Update output when the user selects a new language
import { getTranslation } from './helpers.js';

const selectLanguage = document.querySelector('#languages-list');
const output = document.querySelector('#output-text');

selectLanguage.addEventListener('change', () => {
  output.textContent = getTranslation(selectLanguage.value);
});

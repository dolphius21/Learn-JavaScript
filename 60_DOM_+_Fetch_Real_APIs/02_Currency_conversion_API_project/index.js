// TODO
import FetchWrapper from './fetch-wrapper.js';

const baseCurrency = document.querySelector('#base-currency');
const targetCurrency = document.querySelector('#target-currency');
const result = document.querySelector('#conversion-result');

const url = 'https://v6.exchangerate-api.com/v6/8c29e667afcf8b229d04a848';
const API = new FetchWrapper(url);

const getConversion = (currency) => {
  API.get(`/latest/${currency}`).then((data) => {
    result.textContent = data.conversion_rates[targetCurrency.value];
  });
};

baseCurrency.addEventListener('change', () => {
  getConversion(baseCurrency.value);
});

targetCurrency.addEventListener('change', () => {
  getConversion(baseCurrency.value);
});

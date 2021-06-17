export const getSelectedCurrencies = () => {
  const selectedCurrencies = [...document.querySelectorAll('.active')];
  return selectedCurrencies.map((currency) => currency.textContent);
};

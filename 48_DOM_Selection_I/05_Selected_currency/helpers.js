export const getSelectedCurrency = () => {
  return document.querySelector('.active')?.textContent ?? '';
};

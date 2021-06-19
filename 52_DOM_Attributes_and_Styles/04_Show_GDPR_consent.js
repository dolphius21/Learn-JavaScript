/*
 * @param {Object[]} user
 * @param {number} user.id
 * @param {boolean} user.isEU
 */
const showOrHideConsent = (user) => {
  const consent = document.querySelector('#eu-consent');
  user.isEU ? (consent.style.display = '') : (consent.style.display = 'none');
};

// Sample usage - do not modify
showOrHideConsent({
  id: 1,
  isEU: false
});
showOrHideConsent({
  id: 2,
  isEU: true
});

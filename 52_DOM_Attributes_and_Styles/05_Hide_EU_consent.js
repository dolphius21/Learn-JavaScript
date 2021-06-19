const hideEUConstent = () => {
  const consent = document.querySelector('#eu-consent');
  consent.style.display = 'none';
};

// Sample usage - do not modify
const cookieOk = document.querySelector('#cookie-ok');
cookieOk.addEventListener('click', () => hideEUConstent());

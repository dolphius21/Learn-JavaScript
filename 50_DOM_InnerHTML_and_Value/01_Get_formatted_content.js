const getFormattedWelcomeMessage = () => {
  const formattedWelcomeMessage = document.querySelector('#welcome-message');
  return formattedWelcomeMessage.innerHTML;
};

// Sample usage - do not modify
console.log(getFormattedWelcomeMessage());

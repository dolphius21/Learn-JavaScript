const getIsActiveFromCard = () => {
  const userCard = document.querySelector('#user-card');
  const userIsActive = userCard.dataset.isActive;
  return userIsActive === 'true';
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());

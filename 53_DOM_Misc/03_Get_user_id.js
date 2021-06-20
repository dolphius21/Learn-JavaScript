const getUserIdFromCard = () => {
  const userCard = document.querySelector('#user-card');
  const userId = userCard.dataset.userId;
  return Number.parseInt(userId, 10);
};

// Sample usage - do not modify
console.log(getUserIdFromCard());

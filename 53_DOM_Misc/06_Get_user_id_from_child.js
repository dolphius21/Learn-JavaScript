/*
 * @param {HTMLElement} element
 */
const getUserIdFromElement = (element) => {
  const parent = element.closest('.user-card');
  const parentUserId = parent.dataset.userId;
  return Number.parseInt(parentUserId, 10);
};

// Sample usage - do not modify
console.log(getUserIdFromElement(document.querySelector('#name'))); // 23
console.log(getUserIdFromElement(document.querySelector('#description'))); // 23

/*
 * @param {HTMLElement} element
 */
const getParentOfElement = (element) => {
  return element.parentElement;
};

// Sample usage - do not modify
console.log(getParentOfElement(document.querySelector('h1')));
console.log(getParentOfElement(document.querySelector('p')));

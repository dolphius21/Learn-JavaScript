const getDivElements = () => {
  // TODO: return all the div elements
  return document.querySelectorAll('div');
};

const getFooterLinks = () => {
  // TODO: return all the links that are in the footer-wrapper
  return document.querySelectorAll('footer a');
};

const getAboutLinks = () => {
  // TODO: return all the links that point to the About Us page
  return document.querySelectorAll('.about');
};

// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());

/*
 * @param {string} name
 */
const getSlug = (name) => {
  return name.toLowerCase().replaceAll(' ', '-').slice(0, 15);
};

// Sample usage - do not modify
console.log(getSlug('IKEA table')); // "ikea-table"
console.log(getSlug('200cm Bed')); // "200cm-bed"
console.log(getSlug('Bedside lavalamp')); // "bedside-lavalam"
console.log(getSlug('A B C noodles')); // "a-b-c-noodles"

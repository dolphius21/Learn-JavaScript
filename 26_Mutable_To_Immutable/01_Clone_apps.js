/*
 * @param {string[]} apps
 */
const cloneApps = (apps) => {
  return [...apps];
};

// Sample usage - do not modify
const originalApps = ['Calculator', 'Phone'];
const copiedApps = cloneApps(originalApps);
console.log(copiedApps); // should be ["Calculator", "Phone"]
console.log(copiedApps === originalApps); // should be false (because it's a copy/clone)

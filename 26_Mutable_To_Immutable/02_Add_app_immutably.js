/*
 * @param {string[]} apps
 * @param {string} app
 */
const addApp = (apps, app) => {
  return [...apps, app];
};

// Sample usage - do not modify
const originalApps = ['Calculator', 'Phone'];
console.log(addApp(originalApps, 'Smart lights')); // ["Calculator","Phone", "Smart lights"] (immutable)
console.log(originalApps); // ["Calculator", "Phone"] (unmodified)

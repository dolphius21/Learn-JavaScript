/*
 * @param {string[]} apps
 * @param {string} app
 */
function isAppUsed(apps, app) {
  return apps.includes(app);
}

// Sample usage - do not modify
console.log(isAppUsed(['Twitter', 'Calculator'], 'Calculator')); // true
console.log(isAppUsed(['Clock', 'Calculator'], 'Safari')); // false

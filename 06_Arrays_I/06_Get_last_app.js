/*
 * @param {array} apps
 */
function getLastApp(apps) {
  return apps[apps.length - 1];
}

// Sample usage - do not modify
console.log(getLastApp(['Chrome', 'Clock', 'Twitter'])); // "Twitter"
console.log(getLastApp(['Safari', 'Contacts'])); // "Contacts"

/*
 * @param {array} apps
 */
const removeSecondApp = (apps) => {
  apps.splice(1, 1);
  return apps;
};

// Sample usage
const apps = ['Calculator', 'Whatsapp', 'Chrome', 'Firefox'];
console.log(removeSecondApp(apps)); // ["Calculator", "Chrome", "Firefox"]

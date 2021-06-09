/*
 * @param {array} apps
 */
const removeFirstApp = (apps) => {
  apps.splice(0, 1);
  return apps;
};

// Sample usage - do not modify
const apps = ['Calculator', 'Whatsapp', 'Chrome', 'Firefox'];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]

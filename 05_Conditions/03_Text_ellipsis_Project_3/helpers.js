/*
 * @param {string} text
 */
function getDescription(text) {
  console.log(text); // write something in the BROWSER and see it in the console
  if (text.length > 10) {
    return text.substring(0, 10) + '...';
  }
  return text;
}

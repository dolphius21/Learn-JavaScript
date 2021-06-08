/*
 * @param {string[]} countries
 */
function getDropdown(countries) {
  console.log(countries);
  let html = `<option value="">Please select</option>`;
  countries.forEach((country) => {
    html += `<option value="${country.toLowerCase()}">${country}</option>`;
  });
  return html;
}

/*
 * @param {string[]} countries
 */
const getDropdown = (countries) => {
  return `<option value="">Please select</option>
      ${countries
        .map(
          (country) => `
          <option value="${country.toLowerCase()}">${country}</option>`
        )
        .join()}
  `;
};

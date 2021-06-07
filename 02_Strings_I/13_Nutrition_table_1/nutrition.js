/*
 * @param {string} label
 * @param {string} value
 */
function renderTableRow(label, value) {
  return `
      <tr>
          <td>${label}</td>
          <td>${value}</td>
      </tr>
      `;
}

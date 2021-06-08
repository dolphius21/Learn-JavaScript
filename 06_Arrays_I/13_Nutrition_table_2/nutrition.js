/*
 * @param {array[][]} rows
 */
function renderTableRows(rows) {
  let html = '';
  rows.forEach((item) => {
    html += `
          <tr>
              <td>${item[0]}</td>
              <td>${item[1]}</td>
          </tr>
      `;
  });
  return html;
}

/*
 * @param {array[][]} rows
 */
const renderTableRows = (rows) => {
  console.log(rows);
  let html = `
      ${rows
        .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
        .join('')}
      `;
  return html;
};

console.log(
  renderTableRows([
    ['Carbs', '17g'],
    ['Protein', '19g'],
    ['Fat', '5g']
  ])
);

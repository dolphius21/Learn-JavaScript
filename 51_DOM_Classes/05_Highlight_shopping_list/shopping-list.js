/*
 * @param {HTMLLIElement} li
 */
export const handleItemClick = (li) => {
  if (li.classList.contains('highlighted')) {
    li.classList.remove('highlighted');
  } else {
    li.classList.add('highlighted');
  }
};

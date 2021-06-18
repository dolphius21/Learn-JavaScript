export const getFullName = () => {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;

  return `${firstName} ${lastName}`;
};

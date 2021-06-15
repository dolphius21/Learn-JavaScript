const getTweetDetails = () => {
  // TODO
  fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json'
  )
    .then((res) => res.json())
    .then((data) => {
      const { firstName, lastName } = data.author.details;
      const fullName = `${firstName} ${lastName}`;
      showAuthorName(fullName);
    });
};

// do NOT modify this function
function showAuthorName(fullName) {
  console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();

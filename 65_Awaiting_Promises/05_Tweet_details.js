const getTweetDetails = async () => {
  // TODO using async/await
  const res = await fetch(
    `https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json`
  );
  const data = await res.json();
  const { firstName, lastName } = data.author.details;
  return showAuthorName(`${firstName} ${lastName}`);
};

// do NOT modify this function
function showAuthorName(fullName) {
  console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();

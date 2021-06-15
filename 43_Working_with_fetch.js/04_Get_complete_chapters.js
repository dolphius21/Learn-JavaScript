const getChapters = () => {
  // TODO
  fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const completedChapters = data.filter(
        (item) => item.isCompleted === true
      );
      displayCompletedChapters(completedChapters);
    });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log('Received', chapters);
}

// Sample usage - do not modify
getChapters();

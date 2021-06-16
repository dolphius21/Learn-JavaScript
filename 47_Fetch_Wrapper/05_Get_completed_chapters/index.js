import FetchWrapper from './fetch-wrapper.js';

const getChapters = () => {
  // TODO
  const fetchAPI = new FetchWrapper(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app'
  );
  fetchAPI.get('/chapters/all.json').then((data) => {
    const complete = data.filter((chapter) => chapter.isCompleted === true);
    displayCompletedChapters(complete);
  });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log('Received', chapters);
}

// Sample usage - do not modify
getChapters();

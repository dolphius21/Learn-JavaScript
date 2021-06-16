import FetchWrapper from './fetch-wrapper.js';

const checkForNewNotifications = () => {
  // TODO
  const API = new FetchWrapper(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app'
  );
  API.get('/notifications/new.json').then((data) =>
    showNewNotifications(data.count)
  );
};

// do NOT modify this function
function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

// Sample usage - do not modify
checkForNewNotifications();

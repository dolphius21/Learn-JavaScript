class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    return response.json();
  }
}

const API = new FetchWrapper(
  'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json'
);

const checkForNewNotifications = async () => {
  // TODO using async/await + handle errors
  try {
    const data = await API.get('');
    return showNewNotifications(data.count);
  } catch (err) {
    showNewNotifications();
  }
};

// do NOT modify this function
function showNewNotifications(count) {
  if (!count) {
    console.log('We could not load your notifications. Try again later.');
    return;
  }
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

// Sample usage - do not modify
checkForNewNotifications();

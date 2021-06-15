const checkForNewNotifications = () => {
  // TODO
  fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json'
  )
    .then((res) => res.json())
    .then((data) => {
      showNewNotifications(data.count);
    });
};

// do NOT modify this function
function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

// Sample usage - do not modify
checkForNewNotifications();

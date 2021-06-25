const checkForNewNotifications = async () => {
  // TODO using async/await
  const res = await fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json'
  );
  const data = await res.json();
  return data.count;
};

checkForNewNotifications().then((count) => showNewNotifications(count));

// do NOT modify this function
function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

// Sample usage - do not modify
checkForNewNotifications();

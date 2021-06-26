let isGameStarted = false;

const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
  if (!isGameStarted) {
    isGameStarted = true;
    startGame();
  }
  logAnalytics();
});

// do not modify
function startGame() {
  console.log('game started!');
}

// do not modify
function logAnalytics() {
  console.log('log analytics');
}

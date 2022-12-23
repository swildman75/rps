// get random computer choice
// get user choice via prompt (case-insensitive)
// compare user and computer choice for a single game
// use a for loop to play a 5 round match

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      console.log('rock');
      break;
    case 1:
      console.log('paper');
      break;
    case 2:
      console.log('scissors');
  }
}

getComputerChoice();

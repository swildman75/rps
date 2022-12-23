// get random computer choice
// get user choice via prompt (case-insensitive)
// compare user and computer choice for a single game
// use a for loop to play a 5 round match

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(getComputerChoice());

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose ${computerSelection} beats your ${computerSelection}`;
  }
}

playRound(playerSelection, computerSelection);

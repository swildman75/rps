// get random computer choice
// get user choice via prompt (case-insensitive)
// compare user and computer choice for a single game
// use a for loop to play a 5 round match

let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose ${computerSelection} beats your ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Do you choose rock, paper or scissors?'
    ).toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore}`
    );
  }
}

console.log(game());

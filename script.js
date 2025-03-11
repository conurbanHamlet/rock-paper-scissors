// Initialize variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Generate a random number between 0 and 1 and assign it to a variable
  const random = Math.random();

  if (random < 1/3) {
    // If the number is less than 1/3 return 'rock'
    return "rock";
  } else if (random < 2/3) {
    // If the number is less than 2/3 return 'paper'
    return "paper";
  } else {
    // Else return 'scissors'
    return "scissors";
  }
}

function getHumanChoice() {
// Prompt the user asking between 3 choices: "rock", "paper" and "scissors"
return prompt("What do you choose: 'rock', 'paper' or 'scissors'?");
// Return the user's choice
}

// Take the human and computer choices as arguments, play a single round, increment the round winner's score, and log a winner announcement
function playRound(humanChoice, computerChoice) {

  if (humanChoice.toLowerCase() != computerChoice) {
    
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
      console.log(`You win, rock beats scissors`);
      humanScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
      console.log(`You win, paper beats rock`);
      humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
      console.log(`You win, scissors beats paper`);
      humanScore++;
    } else {
      console.log(`You lose, ${computerChoice} beats ${humanChoice.toLowerCase()}!`);
      computerScore++;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
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

console.log(getComputerChoice());
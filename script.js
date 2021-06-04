let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let targetNumber = Math.floor(Math.random() * 10);

  if (targetNumber === 10) {
    return targetNumber - 1;
  } else {
    return targetNumber;
  }
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if(humanGuess > 9) {
    alert(`Please enter a value less than 10`);
    location.reload(); 
  } else {
  let humanDifference = Math.abs(targetGuess - humanGuess);
  let computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
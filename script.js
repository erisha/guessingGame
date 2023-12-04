// Create your game here!'


//create page here instead of HTML

//const gameContainer = document.createElement(h1);

//picks mysteryNum between 1-10
const mysteryNum = Math.floor(Math.random() * 10) + 1;
//max attempts
let maxAttempts = 3;

// play the guessingGame
function guessingGame() {
  for ( let attempts = 1; attempts <= maxAttempts; attempts++){
    // prompts user to guess a number
    const userInput = window.parseInt(prompt(`Attempt ${attempts} : Guess a number 1-10`)
    alert(`You guessed ${userInput}`));
    // check if userInputinput is a valid number 
    if (isNan(userInput)){
      alert(`Error: Please enter a valid number`);
      attempts --; //substacts after each incorrect attempt
      continue; 
    }  
    // check if userInput is correct
      if (mysteryNum === userInput) {
        alert(`Winner! ${mysteryNum} is correct you guessed it in ${attempts}`);
      } 
      // wrong answer - give hint
      else if (mysteryNum > userInput) {
        alert(`Nope. Guess higher....try again`);
      } else if (mysteryNum < userInput) {
        alert(`Nope. Guess a lower number....try again`);
      }
    }
    // out of guesses/ attempts
    if (attempts > maxAttemps){
      alert(`Game Over! You're out of guesses.`)
    }
  }

  guessingGame();
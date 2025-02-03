// Computer choice algorithm.

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min = 1);
    const maxFloored = Math.floor(max = 3);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }
 
function getComputerChoice() {
    if (getRandomIntInclusive() <= 1) {
        return("Rock");
    }

    else if (getRandomIntInclusive() == 2) {
        return("Paper");
    }

    else {
        return("Scissors");
    }
}

console.log(getComputerChoice());

//User input Algorithm
let choice = prompt("Choose between Rock Paper and Scissors");
let answer = choice.toUpperCase();

function getHumanChoice() {
if (answer = "ROCK") {
    return 1;
}

else if (answer = "PAPER") {
    return 2;
}
else if (answer = "SCISSORS") {
    return 3;
}

else {
    return "Invalid answer!";
}
}

// score

let humanScore = 0;
let computerScore = 0;


//algorithm playing rounds

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice;
    computerChoice = getComputerChoice;

    if (humanChoice == 1 && computerChoice == "Paper") {
        console.log("You Lost, Paper beats Rock");
        computerScore += 1;
    }

    else if (humanChoice == 1 && computerChoice == "Scissors") {
        console.log("You Won, Rock beats Scissors");
        humanScore += 1;
    }

    else if (humanChoice ==  2 && computerChoice == "Rock" ) {
        console.log("You Won, Paper beats Rock");
        humanScore += 1;
    }

    else if (humanChoice ==  2 && computerChoice == "Scissors" ) {
        console.log("You Lost, Scissors beats Paper");
        computerScore += 1;
    }

    else if (humanChoice ==  3 && computerChoice == "Rock") {
        console.log("You Lost, Rock beats Scissors");
        computerScore += 1;
    }

    else if (humanChoice ==  3 && computerChoice == "Paper") {
        console.log("You Won, Scissors beats Paper");
        humanScore += 1;
    }

    else {
        console.log("Draw");

    }
}
// algorithm full game

function playGame() {

}


/*  
Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. 
Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. 
You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the 
return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.  
*/
//algorithm for computer choice

    //function for randomizer between 1-9
function getRandomIntInclusive(min, max) {
    min = 1;
    max = 9;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

    //function for returning the number as a string and showing the player the result
function getComputerChoice(a) {
    a = getRandomIntInclusive();
    if  (a <= 3) {
        console.log("Computer chose Rock");
        return "Rock";
    }

    else if (a <= 6) {
        console.log("Computer chose Paper");
        return "Paper";
    }

    else {
        console.log("Computer chose Scissors");
        return "Scissors";
    }
}



// algorithm for human choice

function getHumanChoice(input) {
    input = prompt("Choose between Rock Paper and Scissors").toUpperCase;

    if (input = "ROCK") {
        console.log("You chose Rock");
        return "Rock";
    }

    else if (input = "PAPER") {
        console.log("You chose Paper");
        return "Paper";
    }

    else {
        console.log("You chose Scissors");
        return "Scissors";
    }
}

getHumanChoice();
getComputerChoice();
//score

const humanScore = 0;
const computerScore = 0;

//algorithm for playes score

function playRound(humanChoice, computerChoice) {
 humanChoice = getHumanChoice;
 computerChoice = getComputerChoice;

 if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lost Rock loses to Paper");
    return 1,
    computerScore++;
 }

 else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You Won Rock beats Scissors");
    return 1,
    humanScore++;
 }

 else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You Won Paper beats Rock");
    return 1,
    humanScore++;
 }

 else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lost Paper loses to Scissors");
    return 1,
    computerScore++;
 }

 else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lost Scissors loses to Rock");
    return 1,
    computerScore++;
 }

 else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You Won Scissors beats Paper");
    return 1,
    humanScore++;
 }

 else {
    console.log("Draw!");
    return 1;
 }

}

playRound();
console.log(humanScore);
//algorithm for adding Rounds til 5 and ending the game


function playGame() {

}




/*
Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the 
scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable.
 Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the
  choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return
 values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/
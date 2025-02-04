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
function getComputerChoice() {
    let a;
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
function getHumanChoice() {
    const input = prompt("Choose between Rock Paper and Scissors").toLocaleUpperCase();

    if (input == "ROCK") {
        console.log("You chose Rock");
        return "Rock";
    }

    else if (input == "PAPER") {
        console.log("You chose Paper");
        return "Paper";
    }

    else if (input == "SCISSORS") {
        console.log("You chose Scissors");
        return "Scissors";
    }

    else {
        console.log("Invalid answer");
    }
}


//score

let humanScore = 0;
let computerScore = 0;
//algorithm for playes score

function playRound(humanChoice, computerChoice) {
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice();

 if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lost Rock loses to Paper");
    computerScore++;
    return 1; 
 }

 else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You Won Rock beats Scissors");
    humanScore++;
    return 1;
 }

 else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You Won Paper beats Rock");
    humanScore++;
    return 1;  
 }

 else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lost Paper loses to Scissors");
    computerScore++;
    return 1;   
 }

 else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lost Scissors loses to Rock");
    computerScore++;
    return 1;   
 }

 else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You Won Scissors beats Paper");
    humanScore++;
    return 1;  
 }

 else {
    console.log("Draw!");
    return 1;
 }

}


//algorithm for adding Rounds til 5 and ending the game

function playGame() {
    
   for(let x = 1; x <= 5; x++) {
            playRound();
            console.log(`Round ${x}`);
    }

    if (humanScore > computerScore) {
        console.log("You Won the Game");
    }

    else if (computerScore > humanScore) {
        console.log("Computer Won the Game");
    }

    else {
        console.log("Game ended in a Draw!");
    }
    console.log(`Your Score ${humanScore}`);
    console.log(`Computer Score ${computerScore}`);
}

playGame();


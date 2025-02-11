//algorithm for computer choice

 //function for randomizer between 1-9
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

    //function for returning the number as a string and showing the player the result
function getComputerChoice() {
    let a;
    a = getRandomIntInclusive(1, 9);
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

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", () => getChoice("Rock"));
paper.addEventListener("click", () => getChoice("Paper"));
scissors.addEventListener("click", () => getChoice("Scissors"));

// Score
let humanScore = 0;
let computerScore = 0;

// Function to handle human choice
function getChoice(humanChoice) {
    console.log(`You chose ${humanChoice}`);
    let computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
}

//algorithm for players score

function playRound(humanChoice, computerChoice) {

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
 
}



//div for the results
let div = document.createElement("div")
div.setAttribute("id", "results")

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
        return "Rock";
    }

    else if (a <= 6) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}


// algorithm for human choice

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

scissors.parentNode.insertBefore(div, scissors.nextSibling);

rock.addEventListener("click", () => getChoice("Rock"));
paper.addEventListener("click", () => getChoice("Paper"));
scissors.addEventListener("click", () => getChoice("Scissors"));

// Score
let humanScore = 0;
let computerScore = 0;


// styles for result div
results.style.cssText = "width: 87.5%; height: 25%; background-color: var(--div-bg-color); align-self: flex-end; display: flex; flex-direction: column; position:absolute; justify-content: space-around; align-items: center; border: 1px solid purple; box-shadow: 0 0 50px purple; color: black; font-weight: bold; font-size: 1.3em; font-family: Arial; bottom: 5vh;"
results.style.visibility = "hidden";
// Function to handle human choice
function getChoice(humanChoice) {
    results.style.visibility = "visible";
    let computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
}

//algorithm for players score

function playRound(humanChoice, computerChoice) {
    results.innerHTML = `<span>You chose ${humanChoice} computer chose ${computerChoice}</span>`
 if (humanChoice == "Rock" && computerChoice == "Paper") {
    results.innerHTML += "You lost Rock loses to Paper";
    computerScore++;
    return 1; 
 }

 else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    results.innerHTMl += "You Won Rock beats Scissors";
    humanScore++;
    return 1;
 }

 else if (humanChoice == "Paper" && computerChoice == "Rock") {
    results.innerHTML += "You Won Paper beats Rock";
    humanScore++;
    return 1;  
 }

 else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    results.innerHTML += "You lost Paper loses to Scissors";
    computerScore++;
    return 1;   
 }

 else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    results.innerHTML += "You lost Scissors loses to Rock";
    computerScore++;
    return 1;   
 }

 else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    results.innerHTML += "You Won Scissors beats Paper";
    humanScore++;
    return 1;  
 }

 else {
    results.innerHTML += "Draw!";
    return 1;
 }

}


//algorithm for adding Rounds til 5 and ending the game

function playGame() {
 
}



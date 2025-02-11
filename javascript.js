//div for the results
let div = document.createElement("div")
div.setAttribute("id", "results")

let divLeft = document.createElement("div")
let divRight = document.createElement("div")

div.appendChild(divLeft)
div.appendChild(divRight)
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


// styles for javascript divs 
div.style.cssText = "width: 87.5%; height: 25%; background-color: var(--div-bg-color); align-self: flex-end; display: flex; position:absolute; justify-content: space-between; border: 1px solid purple; box-shadow: 0 0 50px purple; color: white; font-weight: bold; font-size: 1.3em; font-family: Arial; bottom: 5vh;"
div.style.visibility = "hidden";

divLeft.style.cssText = "width: 80%; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;"
divRight.style.cssText = "width: 20%; height: 100%; display: flex; flex-direction: column; margin-top: 5%; margin-right: 5vw;"

// Function to handle human choice
function getChoice(humanChoice) {
    div.style.visibility = "visible";
    let computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
}




let rounds = 0

divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`


function playGame() {
rounds++
divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
if (rounds % 5 == 0 && humanScore > computerScore) {
    divLeft.innerHTML += "<span>You Won!</span>"
    rounds = 0
    humanScore = 0
    computerScore = 0
}

else if (rounds % 5 == 0 && humanScore < computerScore){
    divLeft.innerHTML += "<span>You Lost!</span>"
    rounds = 0
    humanScore = 0
    computerScore = 0
}

else if (rounds % 5 == 0 && humanScore == computerScore) {
    divLeft.innerHTML += "<span>Game ended in a Draw!</span>"
    rounds = 0
    humanScore = 0
    computerScore = 0
}
}






//algorithm for players score

function playRound(humanChoice, computerChoice) {

    divLeft.innerHTML = `<span>You chose ${humanChoice}</span> <span>Computer chose ${computerChoice}</span>`
    if (humanChoice == "Rock" && computerChoice == "Paper") {
    divLeft.innerHTML += "You lost Rock loses to Paper";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    computerScore++; 
  
 }

 else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    divLeft.innerHTML += "You Won Rock beats Scissors";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    humanScore++;
   
 }

 else if (humanChoice == "Paper" && computerChoice == "Rock") {
    divLeft.innerHTML += "You Won Paper beats Rock";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    humanScore++;
    
 }

 else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    divLeft.innerHTML += "You lost Paper loses to Scissors";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    computerScore++;
    
 }

 else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    divLeft.innerHTML += "You lost Scissors loses to Rock";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    computerScore++;
     
 }

 else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    divLeft.innerHTML += "You Won Scissors beats Paper";
    divRight.innerHTML = `<span>Score: ${humanScore}</span><span>Enemy Score: ${computerScore}</span><span>Round: ${rounds}</span>`
    humanScore++;
    
 }

 else {
    divLeft.innerHTML += "Draw!";
    
 }
playGame();

return 1
}







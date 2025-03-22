
//This the game part



function getComputerChoice(max){
    return Math.floor(Math.random()* max)
    
}


switch(getComputerChoice(3)){
     case 0:
        console.log("rock")
        break;
    case 1:
        console.log("paper")
        break;
    case 2:
        console.log("scissors")
        break;

}

function getHumanChoice(){
    
    let sign = prompt("Rock paper Scissors");
    
    if (sign === "rock"){
        
       Humanchoice = "rock"
    } else if (sign === "paper"){
        Humanchoice = "paper"
    } else if (sign === "scissors"){
        Humanchoice = "scissors"
    } else{
       prompt("please try a valid choice")
    }

    console.log(Humanchoice);
    return Humanchoice;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Human wins!";
    } else {
        return "Computer wins!";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = ["rock", "paper", "scissors"][getComputerChoice(3)];
        const result = playRound(humanChoice, computerChoice);

        console.log(`Round ${i + 1}:`);
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);

        if (result === "Human wins!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
    }

    console.log("Final Score:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Human is the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game is a tie!");
    }
}


// the JavaScript file
const button = document.getElementById('button');

button.addEventListener('click', Hello);

function Hello(){
    alert('Hello');
}


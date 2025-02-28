console.log("Hello, World!");

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

    }





const HumanScore = 0;

const ComputerScore = 0;

function PlayRound(humanchoice,computerchoice){

    getHumanChoice();


    
}

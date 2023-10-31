function getComputerChoice(min, max){
     min = 1;
     max = 4;
    let computerChoice = Math.floor(Math.random()*(max - min)) + min;

    if(computerChoice == 1){
        console.log("Computer Chose Rock!");
        return computerChoice;
    } else if (computerChoice == 2){
        console.log("Computer Chose Paper!");
        return computerChoice;
    } else {
        console.log("Computer Chose Scissors!");
        return computerChoice;
    }
    
    return computerChoice;
}

function getPlayerSelection(){

    let playerChoice = prompt("rock(1), paper(2), or scissors?(3)");
    
    if(playerChoice==1){
        console.log("Player has chosen ROCK!");
    }
      else if(playerChoice==2){   
        console.log("Player has chosen PAPER!");   
    } else if(playerChoice==3){
        console.log("Player has chosen SCISSORS!");   
    } 
    else {
        console.log("Didn't choose a acceptable choice. Reload and Try again.")
    }
    
    return playerChoice;
}

function play(getComputerChoice, getPlayerSelection){
    computerChoice = getComputerChoice();
    playerChoice = getPlayerSelection();
    if((computerChoice == 1 && playerChoice == 1)||(computerChoice == 2 && playerChoice == 2)||(computerChoice == 3 && playerChoice == 3)){
        alert("You both chose the same option!  It's a tie!");
    } else if(computerChoice == 1 && playerChoice == 2){
        alert("Computer threw rock and you threw paper, YOU WIN!");
    } else if(computerChoice == 1 && playerChoice == 3){
        alert("Computer threw rock and you threw scissors, YOU LOSE!");
    } else if(computerChoice == 2 && playerChoice == 1){
        alert("Computer threw paper and you threw rock, YOU LOSE!");
    } else if(computerChoice == 2 && playerChoice == 3){
        alert("Computer threw paper and you threw scissors, YOU WIN!");
    } else if(computerChoice == 3 && playerChoice == 1){
        alert("Computer threw scissors and you threw rock, YOU WIN!");
    } else if(computerChoice == 3 && playerChoice == 2){
        
        alert("Computer threw scissors and you threw paper, YOU LOSE!");
    }
}


function getComputerChoice(min, max){
     
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
        getPlayerSelection();
    }
    
    return playerChoice;
}

function play(){
    let cChoice = getComputerChoice(1,4);
    let pChoice = getPlayerSelection();
    let winner = "none";
    let player = "player";
    let computer = "computer";
    let tie = "tie";
    if((cChoice == 1 && +pChoice == 1)||(cChoice == 2 && +pChoice == 2)||(cChoice == 3 && +pChoice == 3)){
        alert("You both chose the same option!  It's a tie!");
        winner = tie;
        return winner;

    } else if(cChoice == 1 && +pChoice == 2){
        alert("Computer threw rock and you threw paper, YOU WIN!");
        winner = player;
        
        return winner;
    } else if(cChoice == 1 && +pChoice == 3){
        alert("Computer threw rock and you threw scissors, YOU LOSE!");
        winner = computer;       
        return winner;

    } else if(cChoice == 2 && +pChoice == 1){
        alert("Computer threw paper and you threw rock, YOU LOSE!");
        winner = computer;       
        return winner;

    } else if(cChoice == 2 && +pChoice == 3){
        alert("Computer threw paper and you threw scissors, YOU WIN!");
        winner = player;        
        return winner;

    } else if(cChoice == 3 && +pChoice == 1){
        alert("Computer threw scissors and you threw rock, YOU WIN!");
        winner = player;       
        return winner;

    } else if(cChoice == 3 && +pChoice == 2){
        alert("Computer threw scissors and you threw paper, YOU LOSE!");
        winner = computer;        
        return winner;
    }

    return winner;
    
    
}

function game(){
    let pScore = 0;
    let cScore = 0;
    let player = "player";
    let computer = "computer";
    for(let i = 0; i <= 5; i++){
        let winner = play();
        if(winner == player){
            pScore = pScore + 1;
        } else if(winner == computer){
            cScore = cScore + 1;
        } else {
            continue;
        }
    }
    if(pScore > cScore){
        alert("Player = " + pScore + " Computer = " + cScore + " YOU'VE WON!");
    } else if (cScore > pScore){
        alert("Player = " + pScore + " Computer = " + cScore + " YOU'VE LOST!");
    } else{
        alert("Player = " + pScore + " Computer = " + cScore + " YOU'VE TIED!");
    }
}


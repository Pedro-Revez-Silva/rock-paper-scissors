function computerChooses(){
    let index = Math.floor(Math.random() * 3);
    let plays = ["rock", "paper", "scissors"];
    return plays[index];
}

function gameRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("It's a tie!");
        return 0; //Tie
    }if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        console.log("Player wins!");
        return 1; //player wins
    }else{
        console.log("Computer wins!");
        return 2; //computer wins
    }
}

function playerChooses(){
    let playerSelection = prompt("Rock, Paper or Scissors?", '');
    playerSelection = playerSelection.toLocaleLowerCase();
    return playerSelection;
}

function game(){
    let playerSelection;
    let gamescore = [0, 0, 0]; //[tie, player, computer]
    console.log("Lets start the game!")
    for(let i = 1; i < 6; i++){
        console.log("Round " + i);
        playerSelection = playerChooses();
        computerPlay = computerChooses();
        console.log("Computer plays: " + computerPlay);
        gamescore[gameRound(playerSelection, computerPlay)]+= 1;
    }
    if(gamescore[1] > gamescore[2]){
        console.log("Player wins the game!");
    }else if(gamescore[1] < gamescore[2]){
        console.log("Computer wins the game!");
    }else{
        console.log("Game tied!")
    }
}

alert("Check console");
game();



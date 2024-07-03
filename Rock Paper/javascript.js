function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie Replay the game";
    } else if(
        (playerSelection === 'rock' && computerSelection.toLowerCase() ==='scissors')||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock')||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper'))
    {
            return 'you win! ${playerSelection} beats ${computerSelection}';
    }
    else{
        return 'you loose! ${computerSelection} beats ${playerSelection)';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    const playerSelection = prompt("Enter Your Choice(Rock,Paper,Scissors):");
    const computerSelection = getComputerChoice();

    for (let round = 1; round <= 5; round++){
       
        const result = playRound(playerSelection,computerSelection);
        console.log(result);

        if(result.includes("win")){
            playerScore++;
        }
        
        else if(result.includes("loose")){
            computerScore++;
        }
    } 

    if(playerScore > computerScore){
        console.log("You win the game");
    } else if (computerScore > playerScore)
    {
        console.log("You loose the game");
    } else {
         console.log("It's a tie game");
    }
}

game();
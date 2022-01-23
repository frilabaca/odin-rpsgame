function computerPlay() {
    let result = Math.floor(Math.random()*3)+1;
    if (result === 1) {
        return "Rock";
    } else if (result === 2) {
        return "Paper";
    } else if (result === 3) {
        return "Scissors";
    }    
}

 let computerSelection = computerPlay();
 console.log(computerSelection)


// function playRound(playerSelection, computerSelection) {
    
// }

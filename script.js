// let startGame = confirm("Would you like to play Rock, Paper, Scissors?");
// if (startGame) {
   


// } else {
//     alert("Ok! See you later.") //if they hit cancel, the game won't start and they get that msg
// }







let playerInput = prompt("Please select Rock, Paper or Scissors to play.");
let playerSelection = (playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()); // this will make the input case-insensitive

// // function that randomly returns Rock, Paper or Scissors

function computerPlay() {
    let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        return "Rock";
    } else if (result === 2) {
        return "Paper";
    } else if (result === 3) {
        return "Scissors";
    }
}

let computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return "Try again! You must choose between Rock, Paper and Scissors";
    }
}

console.log(playRound(playerSelection, computerSelection));


//     // make play 5 rounds, keep score and report a winner or a loser at the end.
//     // confirmation. once they hit ok, the function game is triggered...
//     // once the function game is triggered we ask for an input from user and run the playround function.
//     // the return of that function adds a score and it prints it...then it triggers the playround function again
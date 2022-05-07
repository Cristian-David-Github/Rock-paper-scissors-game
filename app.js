const mainInfo = document.getElementById('main-info');
const scoreboard = document.getElementById('scoreboard');
const optionButtons = document.querySelectorAll('.options-button');
const displayUserSelection = document.getElementById('user-selection');
const displayComputerSelection = document.getElementById('computer-selection');


let matchesPlayed = 0;
let userScore = 0;
let computerScore = 0;
let userSelection = "";
let computerSelection = "";
const options = [{ name: "paper", picture: "https://rukminim2.flixcart.com/image/416/416/kp4difk0/rolling-paper/o/z/h/6-classic-pack-6-raw-original-imag3fdzvbbyy9ba.jpeg?q=70" }, { name: "rock", picture: "https://thumbs.dreamstime.com/b/grungy-rock-14495322.jpg" }, { name: "scissors", picture: "https://media.istockphoto.com/photos/scissors-w-path-picture-id139741364?b=1&k=20&m=139741364&s=170667a&w=0&h=SsaYCizJJZapfJOWz2WmXhTTAQqIYHQKoQI0yPNP_4s=" }];


optionButtons.forEach((option) => {

    option.addEventListener('click', () => {
        matchesDesired = document.getElementById('rounds').value;
        if (matchesPlayed >= matchesDesired) {
            mainInfo.textContent = `Match finished,  you won ${userScore} times and the computer won ${computerScore} times`;
            setTimeout(() => { window.location.reload() }, 2000);
            return;
        } else {
            matchesPlayed++;
            document.getElementById("matchesPlayed").innerText = `Matches played: ${matchesPlayed}`;
            userSelection = option.textContent;
            if (option.textContent === "paper") {
                userSelection = 0; //paper
            } else if (option.textContent === "rock") {
                userSelection = 1; //rock
            } else if (option.textContent === "scissors") {
                userSelection = 2; //scissors
            }


            scoreboard.textContent = `User = ${userScore} Computer = ${computerScore}`
            mainInfo.textContent = ` You selected ${options[userSelection].name}`;
            displayUserSelection.innerHTML = ` <img src=${options[userSelection].picture} alt="user-selection" width="80%" heigth="80%"/>`;


            setTimeout(() => { mainInfo.textContent = `Now is my turn` }, 2000)
            computerSelection = randomComputerSelection();
            setTimeout(() => {
                mainInfo.textContent = `I selected ${options[computerSelection].name}`
                displayComputerSelection.innerHTML = ` <img src=${options[computerSelection].picture} alt="computer-selection" width="80%" heigth="80%"/>`;
            }, 4000);
            setTimeout(() => {
                compareInputs(userSelection, computerSelection);
            }, 6000);





        }
    }

    )
})


function randomComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}
function compareInputs(userSelection, computerSelection) {
    const currentMatch = `${userSelection} vs ${computerSelection}`;

    // Tie check
    if (userSelection === computerSelection) {
        mainInfo.textContent = ` Its a tie`;
        userScore++;
        computerScore++;
        return;
    }
    // Rock check
    if (userSelection === 1 && computerSelection === 2) {
        userScore++;
        mainInfo.textContent = `You win!`;
        return;
    }
    if (userSelection === 1 && computerSelection === 0) {
        computerScore++;
        mainInfo.textContent = `You lose!`;
        return;
    }
    // Paper check
    if (userSelection === 0 && computerSelection === 1) {
        userScore++;
        mainInfo.textContent = `You win!`;
        return;
    }
    if (userSelection === 0 && computerSelection === 2) {
        computerScore++;
        mainInfo.textContent = `You lose!`;
        return;
    }
    // Scissors check
    if (userSelection === 2 && computerSelection === 1) {
        userScore++;
        mainInfo.textContent = `You win!`;
        return;
    }
    if (userSelection === 2 && computerSelection === 0) {
        computerScore++;
        mainInfo.textContent = `You lose!`;
        return;
    }
    // Default
    mainInfo.textContent = `Something went wrong`;
    return;





}



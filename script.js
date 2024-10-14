let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    options = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
};

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; 
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } 

};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();              
    // console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        } else { 
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log(choice);
        const userChoice = choice.getAttribute("id");  
        playGame(userChoice);
    });
});

// paper beat rock
// rock beat scissor
// scissor beat rock
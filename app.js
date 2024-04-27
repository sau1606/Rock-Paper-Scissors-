let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = (userChoice, compChoice) => {
    //console.log("Game was draw");
    msg.innerText = `Game was draw, your '${userChoice}' & computer '${compChoice}' are same. Play again!`;
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        //console.log("You won");
        msg.innerText = `You won! your '${userChoice}' beats '${compChoice}' `;
        msg.style.backgroundColor = "green";
    }else {
        compScore ++;
        compScorePara.innerText = compScore;
        //console.log("Computer won");
        msg.innerText = `You lose '${compChoice}' beats your '${userChoice}'` ;
        msg.style.backgroundColor = "red";
    }    
};

const getCompChoice = () => {
    // this fnction generated the computer random choice-->
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice : ", userChoice);
    //generate computer choice -->
    const compChoice = getCompChoice();
    console.log("computer choice is : " , compChoice);

    //logic for game -->
    if (userChoice === compChoice){
        drawGame(userChoice,compChoice);
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp has paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock paper-->
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

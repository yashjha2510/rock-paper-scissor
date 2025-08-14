let choices = document.querySelectorAll(".choice img");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// function to generate computer choice
const compChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return (choices[randomidx]);
}

//function to draw game
const drawgame = () => {
    // console.log("match was draw");
    msg.innerText = "match was draw";
    msg.classList.add("defaultClr");
}

//show winner function
const showwinner = (userwin, userChoice, comChoice) => {
    if (userwin) {
        // console.log("you win!!");
        msg.innerText = `you win!! ${userChoice} beats ${comChoice}`;
        uScore.innerText = (userScore = userScore+1);
        msg.classList.add("green");
    }
    else {
        // console.log("you loose");
        msg.innerText = `you loose, ${comChoice} beats ${userChoice}`;
        cScore.innerText = (compScore = compScore+1);
        msg.classList.add("red");
    }
}

// function to find the winner
const playgame = (userChoice) => {
    msg.classList.remove("green", "red", "defaultClr");
    // console.log("user choice = ", userChoice);
    const comChoice = compChoice();
    // console.log("comp. choice = ", comChoice);

    //condition to find winner
    if(userChoice === comChoice) {
        drawgame();
    }
    else {
        let userwin = true;

        //if user choice is rock
        if (userChoice === "rock") {
            if (comChoice === "paper") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }

        // if user choice is paper
        else if (userChoice === "paper") {
            if (comChoice === "scissor") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }

        // if user choice is scissor
        else {
            if (comChoice === "rock") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }
        //print the winner name
        showwinner(userwin, userChoice, comChoice);
    }
}

// function to add event listener
const handleChoiceClick = (event) => {
    const userChoice = event.target.parentElement.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playgame(userChoice);
} 

// loop to add event listener
choices.forEach((img) => {
    // console.log(img);
    img.addEventListener("click", handleChoiceClick);
})

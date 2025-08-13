let choices = document.querySelectorAll(".choice img");

let userScore = 0;
let compScore = 0;

// function to add event listener
const handleChoiceClick = (event) => {
    const choiceId = event.target.parentElement.getAttribute("id");
    console.log("choice was clicked", choiceId);
} 

// loop to add event listener
choices.forEach((img) => {
    console.log(img);
    img.addEventListener("click", handleChoiceClick);

})
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerChoice;
var winner;


$("#shoot").click(function(){
    var userChoice  = $("#input").val(); 
    var randomNumber = Math.random();
    $("#userChoice").text(userChoice);
    if (randomNumber > 0 && randomNumber <.33) {
        computerChoice = "rock";
    $("#computerChoice").text(computerChoice);
    }
    else if (randomNumber > .33 && randomNumber <.66) {
        computerChoice = "paper";
    $("#computerChoice").text(computerChoice);
    } 
    else if (randomNumber > .66 && randomNumber <1) {
        computerChoice = "scissors";
    $("#computerChoice").text(computerChoice);
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
    $("#result").text("user wins");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
    $("#result").text("computer wins");
    } else if (userChoice === "scissors" && computerChoice === "scissors") {
    $("#result").text("tie");
    } else if (userChoice === "paper" && computerChoice === "paper") {
    $("#result").text("tie");
    } else if (userChoice === "rock" && computerChoice === "rock") {
    $("#result").text("tie");
    } else if (userChoice === "rock" && computerChoice === "paper") {
    $("#result").text("computer wins");
    } else if (userChoice === "paper" && computerChoice === "rock") {
    $("#result").text("computer wins");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
    $("#result").text("user wins");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
    $("#result").text("computer wins");
    }
  
  
});

// DOCUMENT READY FUNCTION BELOW


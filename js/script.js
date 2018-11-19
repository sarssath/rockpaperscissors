// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerChoice;
var winner;
var randomNumber = Math.random();

$("#shoot").click(function(){
    var userChoice  = $("#userChoice").val(); 
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
    $("#computerChoice").text(computerChoice);
});

// DOCUMENT READY FUNCTION BELOW


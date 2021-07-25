var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var secondsLeft = 10;

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft = " seconds left in game."
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }
    
    )
}

function sendMessage() {
    timeEl.textContent = " ";
  }
  
  setTime();
  
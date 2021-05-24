// Selects element by class
var timer = document.querySelector(".btnTimer");
console.log("timer: " + timer);
var secondsLeft = 180;
console.log("secondsLeft: " + secondsLeft);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
    console.log("timerInterval: " + timerInterval);
  }

  setTime();

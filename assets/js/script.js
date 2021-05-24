// Selects element by class
var timer = document.querySelector(".timer");
var timeRemaining = 180;    // three minutes or 180 seconds

function setTimer() {
  var ticToc = setInterval(function() {
    timeRemaining--;
    timer.textContent = "Timer: " + timeRemaining;

    if(timeRemaining === 0) {
      clearInterval(ticToc);  // once clock expires, clear timer
    }

  }, 1000);
  console.log("timerInterval: " + ticToc);
}

  setTimer();

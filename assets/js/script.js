var beginQuiz = document.querySelector(".btnStart");
var timer = document.querySelector(".timer");
var timeRemaining = 180;    // three minutes or 180 seconds
// var quizQuestion = $('#quiz-question');

// Timer Function
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

// When start button is clicked, begin timer ...
beginQuiz.addEventListener( "click", setTimer );

// When start button is clicked, show first question ...
  // beginQuiz.on('click', function () {
  //   quizQuestion.text("What is JavaScript?");
  // });



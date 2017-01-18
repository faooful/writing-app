var tick = 1000;
var time = 2;
var inputField = document.getElementById("inputArea");
var timer = document.getElementById("timer");
var twoMinutes = document.getElementById("twoMinutes");
var fiveMinutes = document.getElementById("fiveMinutes");
var tenMinutes = document.getElementById("tenMinutes");

timer.innerHTML = 'Get ready!';

document.getElementById("startAgain").onclick = startAgain;
function startAgain() {
  inputField.value = "";
  inputField.disabled = false;
}

var countDownTimer = function(timeRemaining) {
  timer.innerHTML = timeRemaining;
  console.log(timeRemaining);
  if (timeRemaining === 0) {
    inputField.disabled = true;
    console.log('time is up')
  }
  else {
    setTimeout(function() { countDownTimer(timeRemaining - 1) }, tick)
  }
}

twoMinutes.onclick = function() { countDownTimer(60) };
fiveMinutes.onclick = function() { countDownTimer(300) };
tenMinutes.onclick = function() { countDownTimer(600) };

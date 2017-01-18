var inputField = document.getElementById("inputArea");
var timer = document.getElementById("timer");
var pause = document.getElementById("pauseTimer");

//Button timers
var twoMinutes = document.getElementById("twoMinutes");
var fiveMinutes = document.getElementById("fiveMinutes");
var tenMinutes = document.getElementById("tenMinutes");

timer.innerHTML = 'Get ready!';

document.getElementById("startAgain").onclick = startAgain;
function startAgain() {
  inputField.value = "";
  inputField.disabled = false;
}
var paused = false
var countDownTimer = function(timeRemaining) {
  if (paused) {
    setTimeout(function() { countDownTimer(timeRemaining) }, 1000)
  } else {
    timer.innerHTML = timeRemaining;
    console.log(timeRemaining);
    if (timeRemaining === 0) {
      inputField.disabled = true;
      console.log('time is up')
    }
    else {
      setTimeout(function() { countDownTimer(timeRemaining - 1) }, 1000)
    }
  }
}

pause.onclick = function() {
  if (this.checked) {
    paused = true
    inputField.disabled = true;
    console.log('Paused');
  }
  else {
    paused = false
    inputField.disabled = false;
    console.log('Unpaused');
  }
}

twoMinutes.onclick = function() { countDownTimer(60); };
fiveMinutes.onclick = function() { countDownTimer(300) };
tenMinutes.onclick = function() { countDownTimer(600) };

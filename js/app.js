var inputField = document.getElementById("inputArea");
// var duration = 3000;
var oneMinute = document.getElementById("oneMinute");

document.getElementById("startTimer").onclick = disableInput;
function disableInput() {
  inputField.disabled = true;
}

document.getElementById("startAgain").onclick = startAgain;
function startAgain() {
  inputField.value = "";
  inputField.disabled = false;
}

var oneMinuteDisable = function() {
    setTimeout(function() {
      inputField.disabled = true;
      console.log('time is up')
    }, 2000)
}

oneMinute.onclick = oneMinuteDisable;

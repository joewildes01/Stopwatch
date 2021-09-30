window.onload = function() {
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var milsecs = 0;

  var interval;

  var manageMilsecs = document.getElementById('milsecs')
  var manageSeconds = document.getElementById('secs');
  var manageMinutes = document.getElementById('mins');
  var manageHours = document.getElementById('hrs');

  var startButton = document.getElementById('srt');
  var stopButton = document.getElementById('stp');
  var resetButton = document.getElementById('rst');

  startButton.onclick = function() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
  }
  stopButton.onclick = function() {
    clearInterval(interval);
  }
  resetButton.onclick = function() {
    clearInterval(interval);
    milsecs = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    manageMilsecs.innerHTML = "00";
    manageSeconds.innerHTML = "00";
    manageMinutes.innerHTML = "00";
    manageHours.innerHTML = "00";
  }

  function startTimer() {


    milsecs++;

    if (milsecs <= 10) {
      manageMilsecs.innerHTML = "0" + milsecs;
    }
    if (milsecs >= 10) {
      manageMilsecs.innerHTML = milsecs;

    }
    if (milsecs == 99) {
      milsecs = 0;
      manageMilsecs.innerHTML = "0" + milsecs;
      seconds++;
      if (seconds <= 10) {
        manageSeconds.innerHTML = "0" + seconds;

      }
      if (seconds >= 10) {
        manageSeconds.innerHTML = seconds;

      }
      if (seconds == 60) {
        seconds = 0;
        manageSeconds.innerHTML = "0" + seconds;
        if (minutes <= 10) {
          minutes++
          manageMinutes.innerHTML = "0" + minutes;

        }
        if (minutes >= 10) {
          minutes++
          manageMinutes.innerHTML = minutes;

        }
        if (minutes == 60) {
          minutes = 0;
          manageMinutes.innerHTML = "0" + minutes;
          if (hours <= 10) {
            hours++;
            manageHours.innerHTML = "0" + hours;

          }
          if (hours >= 10) {
            hours++;
            manageHours.innerHTML = hours;

          }

        }



      }


    }



  }

}

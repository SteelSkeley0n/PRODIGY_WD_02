let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);

    document.getElementById("startBtn").textContent = "Resume";
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  pause();
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.getElementById("startBtn").textContent = "Start";
}

function lap() {
  if (elapsedTime > 0) {
    const lapTime = timeToString(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}
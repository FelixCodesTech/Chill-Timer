const timer = document.querySelector("#timer");
const subtitle = document.querySelector("#subtitle");
let timeLeft = 60;

document.body.addEventListener("mousemove", function() {
  timeLeft = 60;
  timer.textContent = `1:00`;
  document.body.style.cursor = "default";
});

const countDown = setInterval(function() {
  timeLeft--;
  timer.textContent = `0:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
  
  if (timeLeft < 59) {
    document.body.style.cursor = "wait";
  }

  if (timeLeft === 0) {
    clearInterval(countDown);
    document.body.style.cursor = "default";
    timer.textContent = "you've done it!";
    subtitle.textContent = "Nice Job 👌";
    subtitle.classList.remove("blink");
  }
}, 1000);

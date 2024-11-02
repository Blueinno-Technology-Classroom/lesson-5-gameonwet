let intervalId = null;
let countDown = 10;
function onInterval() {
  countDown -= 1;
  console.log("⏳" + countDown);
  button1.textContent = "Time remaining: " + countDown;

  if (countDown <= 0) {
    console.log("User was sent to another website");
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}
intervalId = setInterval(onInterval, 1000);

let clickCount = 0;
let button1 = document.getElementById("button1");
function onButtonClicked() {
  clearInterval(intervalId);
  button1.textContent = "Countdown stopped";
}
button1.addEventListener("click", onButtonClicked);

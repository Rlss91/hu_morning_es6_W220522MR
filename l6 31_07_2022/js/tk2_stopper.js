let stopperDivId;
let intervalId;
let counter = 0;

window.addEventListener("load", () => {
  // the stopperDivId will store the div when it will loaded
  stopperDivId = document.querySelector("#stopperDivId");
  intervalId = setInterval(() => {
    stopperDivId.innerText = counter;
    counter++;
  }, 1000);
  console.log("intervalId", intervalId);
});

const handleStopStopperClick = () => {
  /* will stop the timer */
  clearInterval(intervalId);
};

const handleStartStopperClick = () => {
  /* will stop the timer */
  clearInterval(intervalId);
  /* will start new timer */
  intervalId = setInterval(() => {
    stopperDivId.innerText = counter;
    counter++;
  }, 1000);
};

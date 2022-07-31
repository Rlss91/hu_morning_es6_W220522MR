let counter = 0;

// const handleInterval = () => {
//   console.log(`${counter} sec pass`);
//   counter++;
// };
// setInterval(handleInterval, 1000);

// setInterval(() => {
//   console.log("1 sec pass");
// }, 1000);

let timerId = setInterval(() => {
  console.log(`${counter} sec pass`);
  counter++;
}, 1000);

const handleStopInterval = () => {
  clearInterval(timerId);
};
let timeid = document.querySelector("#timeid");
window.addEventListener("load", () => {
  setInterval(() => {
    timeid.innerHTML = new Date().toLocaleTimeString();
    console.log("here");
  }, 1000);
});

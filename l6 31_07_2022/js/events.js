const handleFormSubmit = (eventData) => {
  eventData.preventDefault(); // stop the refresh and stop the data transfering to the server
  console.log(eventData);

  eventData.target.classList.remove("class2"); // remove css class
  eventData.target.classList.add("class3"); // add css class
};

const handleDivClick = (ev) => {
  console.log(ev);
  ev.target.classList.toggle("changeOpacity");
};

document
  .getElementById("balanceLi")
  .addEventListener("DOMSubtreeModified", () => {
    console.log("the event worked");
  });

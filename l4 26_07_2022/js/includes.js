let fullname = "kenny mc";
if (fullname.includes("kenny")) {
  console.log("fullname as kenny");
} else {
  console.log("there is no kenny in fullname");
}

const handleTextInputChange = () => {
  let txt = document.querySelector("p").innerText;
  let txtInputValue = document.getElementById("textInput").value;
  console.log(txt.includes(txtInputValue));
};

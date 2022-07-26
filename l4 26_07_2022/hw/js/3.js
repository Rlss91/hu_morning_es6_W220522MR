let emailsArr = [];
const handleAddNewEmailClick = () => {
  let emailInputValue = document.querySelector("#emailInput").value;
  emailsArr = [...emailsArr, emailInputValue];
  console.log("emailsArr", emailsArr);
};
const isEmail = (email) => {
  //something@something.some...
  let arrSp1 = email.split("@");
  if (arrSp1.length === 2) {
    let arrSp2 = arrSp1[1].split(".");
    if (arrSp2.length > 1) {
      return true;
    }
  }
  return false;
};
const handleFilterEmailsClick = () => {
  let newEmailArr = [];
  let emailsList = document.querySelector("#emailsList");
  emailsList.innerHTML = "";
  for (let item of emailsArr) {
    if (isEmail(item)) {
      //the email valid
      newEmailArr = [...newEmailArr, item]; // we will store the valid emails
      emailsList.innerHTML += `<li class="list-group-item">${item}</li>`; // add valid email to html
    }
  }
  emailsArr = newEmailArr; //set only valid emails
};

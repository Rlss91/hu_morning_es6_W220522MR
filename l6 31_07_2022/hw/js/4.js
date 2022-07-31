class User {
  name;
  lname;
  email;
  password;
  constructor(name, lname, email, password) {
    if (isNaN(name)) {
      this.name = name;
    } else {
      this.name = undefined;
    }
    if (isNaN(lname)) {
      this.lname = lname;
    } else {
      this.lname = undefined;
    }
    this.email = User.checkEmail(email);
    this.password = User.checkPassword(password);
    if (
      this.name == undefined ||
      this.lname == undefined ||
      this.email == undefined ||
      this.password == undefined
    ) {
      this.name = this.lname = this.email = this.password = undefined;
    }
  }
  static checkEmail(email) {
    //by sagi
    let sp1 = email.split("@");
    if (sp1.length === 2) {
      let sp2 = sp1[1].split(".");
      if (sp2.length > 1) {
        return email;
      }
    }
    return undefined;
  }
  static checkPassword(password) {
    if (
      password.length >= 6 &&
      password.length <= 12 &&
      password.includes("if")
    ) {
      return password;
    } else {
      return undefined;
    }
  }
}

// let user = new User("123", "123", "elly@me.com", "123if123");
// console.log(user);
const handleRegisterBtnClick = () => {
  let user = new User(
    document.querySelector("#nameInput").value,
    document.querySelector("#lastNameInput").value,
    document.querySelector("#emailInput").value,
    document.querySelector("#passwordInput").value
  );
  console.log(user);
  if (user.name) {
    document.querySelector("#cardDisplayDiv").innerHTML += `
    <div class="card">
      <div class="card-header">
        ${user.name} ${user.lname}
      </div>
      <div class="card-body">
        <h5 class="card-title">${user.lname}</h5>
        <p class="card-text">${user.email}</p>
      </div>
    </div>
    `;
  }
};

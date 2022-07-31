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
};

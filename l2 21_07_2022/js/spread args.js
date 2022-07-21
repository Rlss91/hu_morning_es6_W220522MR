const userObj = {
  name: "Kenny",
  lname: "McCormick",
  age: 10,
  gender: "M",
  adr: "south park, usa",
};
const user2Obj = {
  name: "John",
  lname: "Wick",
  age: 53,
  gender: "M",
  adr: "new york, usa",
};

const printUser = (user) => {
  console.log(user.name);
  console.log(user.lname);
  console.log(user.age);
  console.log(user.gender);
  console.log(user.adr);
};

const printUser2 = (user) => {
  let { name, lname, age, gender, adr } = user;
  console.log(name);
  console.log(lname);
  console.log(age);
  console.log(gender);
  console.log(adr);
};

//printUserSpread(user)
//let { name, lname, age, gender, adr } = user;
//printUserSpread = ({ name, lname, age, gender, adr })
const printUserSpread = ({ name, lname, age, gender, adr }) => {
  console.log(name);
  console.log(lname);
  console.log(age);
  console.log(gender);
  console.log(adr);
};

printUser(userObj);
printUser(user2Obj);
printUser2(userObj);
printUser2(user2Obj);
printUser3(userObj);
printUser3(user2Obj);

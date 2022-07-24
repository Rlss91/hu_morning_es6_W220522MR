const f1 = ({ name, lname, ...restProps }) => {
  console.log(name, lname);
  console.log("restProps", restProps);
  console.log("age", restProps.age);
};

let obj = {
  name: "kenny",
  lname: "mc",
  age: 10,
  phone: 0,
};

f1(obj);

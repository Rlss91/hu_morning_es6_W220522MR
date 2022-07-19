let nameArr = ["kenny", "shlomo", "sten", "kyle", "eric", "john"];
let lnameArr = ["mccormic", "sap", "marsh", "bro", "cat", "wick"];

let studentObj = {
  name: "kenny",
  lname: "mccormic",
  adr: "usa",
  phone: "666",
};

let rareKeys = {
  "111 111 111": "here",
};

let x = "lname";

console.log("student name", studentObj.name); //static access
console.log("student last name", studentObj[x]); //dynamic access
// console.log("rare key", rareKeys.111 111 111); //! cant do that
console.log("dynamic access to values inside objects", rareKeys["111 111 111"]);

studentObj.age = 10; // add new key value

studentObj.name = "Kenny"; //update value

//check if key exists in object
if (studentObj.hasOwnProperty("name1")) {
  console.log("name is key in studentObj");
} else {
  console.log("name is not key in studentObj");
}

//get list of keys
let keysOfStudentsObj = Object.keys(studentObj);
console.log(keysOfStudentsObj);

let studentsArr = [
  {
    name: "kenny",
    lname: "mccormic",
    adr: "usa",
    phone: "666",
  },
  {
    name: "shlomo",
    lname: "sap",
    adr: "isr",
    phone: "666",
  },
  {
    name: "sten",
    lname: "marsh",
    adr: "isr",
    phone: "666",
  },
  {
    name: "kyle",
    lname: "bro",
    adr: "isr",
    phone: "666",
  },
  {
    name: "eric",
    lname: "cat",
    adr: "isr",
    phone: "666",
  },
  {
    name: "john",
    lname: "wick",
    adr: "isr",
    phone: "666",
  },
];
console.log("your name is", studentsArr[0].name);

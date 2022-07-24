let obj = {
  name: "kenny",
  lname: "mc",
  adr: {
    city: "ashkelon",
    street: "nevey ilan",
  },
};

let n1 = 5;
let n2 = n1;

n2 = 8;
console.log("n1", n1, "n2", n2);

let obj2 = { ...obj };
obj2.adr = { ...obj.adr };
obj2.name = "john";
// obj2.lname = "wick";
obj2.adr.street = "eli cohen";
console.log("obj", obj, "obj2", obj2);

let obj3 = _.cloneDeep(obj);
console.log("obj3", obj3);

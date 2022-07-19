/* object destructioring */
let user = {
  name: "kenny",
  phone: "0500000000",
  adr: "usa",
};

let { phone: phoneNumber, adr } = user;
// let phone, adr;
// phone = user.phone;
// adr = user.adr;

console.log(phoneNumber, adr);

/* array destructioring */
let arr = [1, 2, 3, 4, 5];

let [cell1, cell2, cell3] = arr;
// let cell1,cell2, cell3
// cell1 = arr[0]
// cell2 = arr[0]
// cell3 = arr[0]

let [, , , cell4] = arr;

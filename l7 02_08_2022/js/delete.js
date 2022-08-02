let obj = {
  firstname: "kenny",
  lastname: "mccormic",
  phone: "050",
  fax: "052",
};
delete obj.fax;
console.log(obj);

class A {
  fname;
  lname;
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}
let a = new A("1", "2");
delete a.lname;
console.log(a);

let fullNamesArr = [
  "kenny mc",
  "john wick",
  "prof john brown",
  "prof samuel oak",
  "prof charls xavier",
  "james profar",
];

for (let fullname of fullNamesArr) {
  if (fullname.startsWith("prof")) {
    console.log(`${fullname} is profesor`);
  }
}

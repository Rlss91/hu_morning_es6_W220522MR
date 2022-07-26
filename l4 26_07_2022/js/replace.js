let str =
  "The replace() method returns a new new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. ";
str = str.replace("new", "old");
//replace will replace the first time it will find "new" to "old"
//if we want to replace all the "new" that we will find in str
//then we will use str.replaceAll("new", "old")
console.log(str);

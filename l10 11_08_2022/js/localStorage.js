localStorage.setItem("token", "123456789");
/*
    to store new and or update data we will use setItem,
    setItem("key", "value"), the key and value should be string.
    localStorage works with string only
*/
let tokenFromls = localStorage.getItem("token");
console.log("tokenFromls", tokenFromls);
/*
    we will get data from localStorage using getItem("key")
*/

localStorage.removeItem("token");

localStorage.clear();
/*
    removeItem("key") will remove only the selected key, value
    clear will remove all key, values
*/

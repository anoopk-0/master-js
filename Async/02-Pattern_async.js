console.log("before...");

const user = getUser(10);
console.log("user:", user); //undefined..
/**
 * we have 3 pattern to deal with async code
 * 1. callback
 * 2. promise
 * 3. async/await
 */

console.log("After...");

//get userf func
function getUser(id) {
  setTimeout(function () {
    console.log("calling a database....with id:", id);
    return { id, username: "anoopk-db" };
  }, 2000);
}

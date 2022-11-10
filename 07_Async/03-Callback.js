/*
IMP:
A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

What does a callback function do?

A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.
*/
console.log("before...");

//if we have lot of function nested  async job, make hard to maintain: also call the callback hell.
getUser(function (data) {
  console.log("user:", data);
  getRepositories(data.username, function (result) {
    console.log("respos", result);
  });
}, 10);

console.log("After...");

//callback is a function which is called when the async result is ready.
function getUser(callback, id) {
  setTimeout(function () {
    console.log("calling a database....with id:", id);
    callback({ id, username: "anoopk-db" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(function () {
    console.log("getting the respositories with username", username);
    callback({
      username,
      id: "xhgaw1211we",
      repos: ["project-01", "project-02"],
    });
  }, 2000);
}

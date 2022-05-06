/*
IMP:Promise and callback?
A key difference between the two is when using the callback approach, we'd normally just pass a callback into a function that would then get called upon completion in order to get the result of something. In promises, however, you attach callbacks on the returned promise object

Promises are one way to deal with asynchronous code, without getting stuck in callback hell.

## Creating a promise
The Promise API exposes a Promise constructor, which you initialize using new Promise():

IMP :Promise is a Object that holds the eventual result of an async operation. when a asyc operation complete it either result in a value or a error. this Object can be one of the 3 state:  

    pending: when we create a promise
    fulfilled: on successful exec
    reject: if we get an error.
*/

const p = new Promise(function (resolve, reject) {
  //asyn operstion
  try {
    setTimeout(() => {
      console.log("calling the end point to get the userdata...");
      resolve({ id: 1, username: "anookp-awas" });
    }, 2000);
  } catch (err) {
    reject(err.message);
  }
});

//fullfill., if then is not used, then pending is the result
p.then((data) => console.log("data-->", data)).catch((err) => console.log(err));

/*
Replacing call back with prmomse
console.log("before...");


getUser(function (data) {
  console.log("user:", data);
  getRepositories(data.username, function (result) {
    console.log("respos", result);
  });
}, 10);

console.log("After...");


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

*/

console.log("before...");

getUser(10)
  .then((user) => {
    console.log("user:", data);
    getRepositories(user.username).then((result) =>
      console.log("respos", result)
    );
  })
  .catch((err) => console.log("error:", err));

console.log("After...");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("calling a database....with id:", id);
      resolve({ id, username: "anoopk-db" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("getting the respositories with username", username);
      resolve({
        username,
        id: "xhgaw1211we",
        repos: ["project-01", "project-02"],
      });
    }, 2000);
  });
}

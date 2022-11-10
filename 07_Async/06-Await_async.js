/*
IMP:
async makes a function return a Promise. await makes a function wait for a Promise.

Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.
 */
console.log("before...");

async function getData() {
  const user = await getUser(10);
  const respos = await getRepositories(user.username);

  return respos;
}

getData().then((d) => console.log(d));

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

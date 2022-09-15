/*
IMP:
working with promise which is already resolved, like working with unit test. 

Promise is a static method, it will return a promise that is already resolved.
    Promise.resolve();
    Promise.reject();

*/

const p1 = Promise.resolve({ id: 1, name: "anoopk" });
p1.then((data) => console.log(data));

const p2 = Promise.reject(new Error("some error occured"));
p2.catch((error) => console.log(error));

/*
TOPIC: Running parallel promise..


IMP: Promise.all
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.


IMP: Promise.race()
The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
return promise as soon as any one of the promise is fulfills or rejected


TOPIC: Promise. allSettled()
The Promise. allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
*/

let _p1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("_p1 promise is resolved...");
    resolve({ id: "bcgy12312", username: "anpk" });
  }, 2000)
);

let _p2 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("_p2 promise is resolved...");
    resolve({
      username: "anujl",
      id: "xhgaw1211we",
      repos: ["project-01", "project-02"],
    });
  }, 3000)
);

Promise.all([_p1, _p2])
  .then((result) => {
    console.log("combined result", result);
  })
  .catch((error) => console.log("error if any of the promise failed..."));

/*
The bind() method returns a new function, when invoked, has its this sets to a specific value.

    `fn.bind(thisArg[, arg1[, arg2[, ...]]])`

the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).

NOTE:Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.

    1. The bind() method creates a new function, when invoked, has the this sets to a provided value.

    2. The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

*/

//TOPIC: Using JavaScript bind() for function binding

let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};

setTimeout(person.getName, 1000); //undefined

let f = person.getName;
setTimeout(f, 1000); // lost person context

//The this inside the setTimeout() function is set to the global object in non-strict mode and undefined in the strict mode Therefore, when the callback person.getName is invoked, the name does not exist in the global object, it is set to undefined.

//Solve
let f1 = person.getName.bind(person);
setTimeout(f1, 1000);

//TOPIC: Using bind() to borrow methods from a different object

let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};

//If you want the flyer object to be able to run, you can use the bind() method to create the run() function with the this  sets to the flyer object:

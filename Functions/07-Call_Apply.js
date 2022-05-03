/*
JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects,

a function is an instance of the Function type

With the call() method, you can write a method that can be used on different objects.
The apply() method invokes a function with a given this value and arguments provided as an array.
this” refers to an object which calls the function it contains.
*/

//TOPIC: Call
function add(x, y) {
  return x + y;
}

let result = add(10, 20);
console.log(result); // 30
//or
let result1 = add.call(this, 10, 20);
console.log(result); // 30

//IMP:By default, the this inside the function is set to the global object i.e., window in the web browsers and globalThis in Node.js.In the strict mode, the this inside the function is set to undefined instead of the global object.

//EXAMPLE: 1
var greeting = "Hi";

var messenger = {
  greeting: "Hello",
};

function say(name) {
  console.log(this.greeting + " " + name);
}

say.call(this, "John"); //"Hi John"
say.call(messenger, "John"); //Hello john

//TOPIC: Using the JavaScript call() method to chain constructors for an object

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget("red", 100, 200);

console.log(widget);

//TOPIC: Using the JavaScript call() method for function borrowing

const car = {
  name: "car",
  start() {
    console.log("Start the " + this.name);
  },
  speedUp() {
    console.log("Speed up the " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly() {
    console.log("Fly");
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();

/**
    Start the aircraft
    Speed up the aircraft
    Fly
 */

//IMP: The apply() method is similar to the call() method excepts that it accepts the arguments of the function as an array instead of individual arguments.

/*
Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

 There are 2 types of functions:
    1. Function Declaration
    2. Function Expression

TOPIC: Function Declaration

 * @description { showMessage } : name of the function
 * @param { parameter1, parameter2 } : pass arbitrary data to functions using parameters.
 * @argument { parameter2 } : When a value is passed as a function parameter, it’s also called an argument. If a function is called, but an argument is not provided, then the corresponding value becomes undefined or it use the default value.
 * 
 * The arguments variable is an array-like object inside a function, representing function arguments.
 */
function showMessage(parameter1, parameter2 = "some default value") {
  // local variable: A variable declared inside a function is only visible inside that function.
  let message = "Hello, I'm JavaScript!";
}

/*
TOPIC: Returning a value
A function can return a value back into the calling code as the result. The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code. It is possible to use return without a value. That causes the function to exit immediately.
*/

function doNothing() {
  return;
}

console.log(doNothing() === undefined); // true

//TOPIC: Function expressions

let sayHi = function () {
  alert("Hello");
};

function sayHi() {
  alert("Hello");
}

/*
IMP:Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

TOPIC: Callback functions
A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

IMP:JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.


IMP:to copy an obj or object into other variable we can use spread operator. let x = {...abcO}
*/
let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

//This way of copying an object is much shorter than let objCopy = Object.assign({}, obj) or for an array let arrCopy = Object.assign([], arr) so we prefer to use it whenever we can.

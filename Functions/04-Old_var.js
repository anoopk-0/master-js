/*
There are two main differences of var compared to let/const:

    - var variables have no block scope, their visibility is scoped to current function, or global, if declared outside function.
    - var declarations are processed at function start (script start for globals)(hoisting)

These differences make var worse than let most of the time. Block-level variables is such a great thing. That’s why let was introduced in the standard long ago, and is now a major way (along with const) to declare a variable.

TOPIC: “var” has no block scope
Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.
*/

if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

//IMP:If a code block is inside a function, then var becomes a function-level variable:

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // works
}

sayHi();
alert(phrase); // ReferenceError: phrase is not defined

//IMP:With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:
var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John

/**
IMP: Declarations are hoisted, but assignments are not.

var are “hoisted” (raised) to the top of the function.
The line var phrase = "Hello" has two actions in it:

    Variable declaration var
    Variable assignment =. 
*/

function sayHi() {
  var phrase; // declaration works at the start...

  alert(phrase); // undefined

  phrase = "Hello"; // ...assignment - when the execution reaches it.
}

sayHi();

/*
TOPIC: IIFE

In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” 
*/

(function () {
  var message = "Hello";

  alert(message); // Hello
})();

//Here, a Function Expression is created and immediately called. So the code executes right away and has its own private variables.
//we declare a Function Expression and run it immediately. Let’s note again: nowadays there’s no reason to write such code.

/*
TOPIC: Global object

In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
*/

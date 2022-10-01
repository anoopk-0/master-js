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

  alert(phrase); // works
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

The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

In a browser it is named window, for Node.js it is global, for other environments it may have another name.

Recently, globalThis was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers.

In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
*/

var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)

//IMP:The same effect have function declarations (statements with function keyword in the main code flow, not function expressions).

//If we used let instead, such thing wouldn’t happen:

let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)

/*
README: 
The global object holds variables that should be available everywhere.

That includes JavaScript built-ins, such as Array and environment-specific values, such as window.innerHeight – the window height in the browser.

The global object has a universal name globalThis.

…But more often is referred by “old-school” environment-specific names, such as window (browser) and global (Node.js).

We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.

In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global object.

To make our code future-proof and easier to understand, we should access properties of the global object directly, as window.x.
*/

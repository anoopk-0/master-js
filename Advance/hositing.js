/*
Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top of scope.

Note: In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase. 

In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
*/

// program to display value
a = 5;
console.log(a);
var a; // 5

/**-------------------------------- */

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

/**-------------------------------- */

//IMP:However in JavaScript, initializations are not hoisted.
console.log(a); //error
var a = 5;

//Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

/**-------------------------------- */
("use strict");
x = 23; // Gives an error since 'x' is not declared
var x;

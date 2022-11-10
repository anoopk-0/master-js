/*
TOPIC:variable

A variable is a “named storage” for data. A variable is a label that references a value like a number or string

`Let message`;
JavaScript is a dynamically typed language. This means that we don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.

To declare and initialize a variable at the same time, you use the following syntax:
let variableName = value;


TOPIC:Undefined vs. undeclared variables

An undefined variable is a variable that has been declared but has not been initialized with a value.In contrast, an undeclared variable is a variable that has not been declared.

console.log(counter); - the counter variable has not been declared. Hence, accessing it causes a ReferenceError

let message = "hello javaScript!!!";

TOPIC:Constants
To declare a constant (unchanging) variable, use const instead of let.

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error.

TOPIC:Identifiers
There are two limitations on variable names in JavaScript. By convention, variable names use camel case like message, yourAge, and myName.

    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit and other special characters.
*/

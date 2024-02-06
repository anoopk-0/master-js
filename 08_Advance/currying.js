/*
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

  - Currying helps we avoid passing the same variable again and again.
  - It helps to create a higher order function
*/

//example:create a function with multiple of 2 or 3 or n...

function multiple(a, b) {
  return a * b;
}

//2 multiple
const multipleOfTwo = multiple.bind(this, 2);

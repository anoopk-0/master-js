/*
A closure is a inner function that have access to it's outer function variables, even when the outer function execution is completed.

- advantage of closure: encapsulation
*/
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add(); // This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

/*
Lexical:

Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.
Lexical Environment: Local Memory + Lexical Environment of its Parent

Lexical in general means in a hierarchy or in a sequence. Whenever a new execution context(EC) is created a new lexical environment is created and it is referenced in the local EC in memory space.
*/

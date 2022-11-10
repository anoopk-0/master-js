/*
TOPIC:Nested functions

A function is called “nested” when it is created inside another function.
*/

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

/*
README:https://www.freecodecamp.org/news/javascript-closure-lexical-scope/

IMP: Lexical Environment/SCOPE

IMP:"Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as static scope."

Every time the JavaScript engine creates an execution context to execute the function or global code, it also creates a new lexical environment to store the variable defined in that function during the execution of that function.

A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function type object] or primitive value).

A Lexical Environment has two components: 
    (1) the environment record and 
    (2) a reference to the outer environment.
    
The environment record is the actual place where the variable and function declarations are stored.
The reference to the outer environment means it has access to its outer (parent) lexical environment. This component is the most important in order to understand how closures work.

    Lexical Environment: Local Memory + Lexical Environment of its Parent


##  lexical scope 

A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.

## scope chain 

Scope chain: Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.

## closure

A closure is a function having access to the parent scope(lexical scope), even after the parent function has closed(this part is closure)

The closure is a function that accesses its lexical scope even executed outside of its lexical scope.

*/

//Example for Lexical scope
const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  childFunction();
};

myFunction();

//Example for closure
const _myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  return childFunction;
};

const result = myFunction();
console.log(result);

/*
TOPIC: Garbage collection

Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.

The main concept of memory management in JavaScript is reachability.

There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.
*/

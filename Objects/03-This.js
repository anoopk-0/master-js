/*
A function that is a property of an object is called its method. Actions are represented in JavaScript by functions in properties.
IMP:The value of this is determined by a function's execution context, which in simple terms means how a function is called.
*/

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello!");
};

/*
TOPIC: “this” in methods

For instance, the code inside user.sayHi() may need the name of the user.
IMP:To access the object, a method can use the this keyword.The value of this is the object “before dot”, the one used to call the method.
*/
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user.sayHi(); // John

/*
TOPIC: “this” is not bound

In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
    `
    function sayHi() {
        console.log( this.name );
    }
    `
The value of this is evaluated during the run-time, depending on the context.

README:
The consequences of unbound this.

In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

TOPIC: Arrow functions have no “this”

Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

For instance, here arrow() uses "this" from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context.
*/

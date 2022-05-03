/*
A function that is a property of an object is called its method. Actions are represented in JavaScript by functions in properties.


IMP: The value of this is determined by a function's execution context, which in simple terms means how a function is called.

IMP:When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.
*/

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi(); // Hello!

//TOPIC: Method shorthand

// these objects do the same

user = {
  sayHi: function () {
    alert("Hello");
  },
};

// method shorthand looks better, right?
user = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert("Hello");
  },
};

/*
TOPIC: “this” in methods

It’s common that an object method needs to access the information stored in the object to do its job.
For instance, the code inside user.sayHi() may need the name of the user.
IMP: To access the object, a method can use the this keyword.The value of this is the object “before dot”, the one used to call the method.
*/
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  },
};

user.sayHi(); // John

/*
TOPIC: “this” is not bound

In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
    `
    function sayHi() {
        alert( this.name );
    }
    `

The value of this is evaluated during the run-time, depending on the context.
*/

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

sayHi(); // In this case this is undefined in strict mode. If we try to access this.name, there will be an error. In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.

/**
README:
The consequences of unbound this
If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.

In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.
*/

/*
TOPIC: Arrow functions have no “this”
Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context
*/

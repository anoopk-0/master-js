/*
NOTE: 
In object-oriented programming, a class is an extensible program-code-template for "creating objects", providing initial values for state (member variables) and implementations of behavior (member functions or methods).

class MyClass {

  constructor() { ... }

  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

IMP:The constructor() method is called automatically by new, so we can initialize the object there.
*/

class User {
  //instance member
  constructor(name) {
    this.name = name;
  }

  //prototype member
  sayHi() {
    console.log(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();

/*
When new User("John") is called:

    1) A new object is created.
    2) The constructor runs with the given argument and assigns it to this.name.

    …Then we can call object methods, such as user.sayHi().


IMP: In JavaScript, a class is a kind of function.

What class User {...} construct really does is:

    - Creates a function named User, that becomes the result of the class declaration. The function code is taken from the      constructor method (assumed empty if we don’t write such method).
    - Stores class methods, such as sayHi, in User.prototype.
After new User object is created, when we call its method, it’s taken from the prototype,


TOPIC: Not just a syntactic sugar

class in not just a syntactic sugar..

1) Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
That’s good, because if we for..in over an object, we usually don’t want its class methods.

2) Classes always use strict. All code inside the class construct is automatically in strict mode.
*/

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};

// Usage:
let _user = new User("John");
user.sayHi();

/*
TOPIC: Getters/setters 

Just like literal objects, classes may include getters/setters, computed properties etc.
*/
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user_ = new User("John");
console.log(user_.name); // John

user = new User(""); // Name is too short.

//Making bound methods with class fields: using arrow func

class Button {
  constructor(value) {
    this.value = value;
  }

  //change it to arrow function
  click() {
    console.log(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

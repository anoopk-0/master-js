/*
TOPIC: Classes

*Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

IMP: Hoisting
An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`drawing a circle in constructor function...`);
  };
}
*/

class ClassName {
  //IMP:The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

  //declaring some property
  name = "";
  age = "";
  constructor(name, age) {
    /*
      - The constructor method is a special method for creating and initializing an object created with a class.
      - A constructor can use the super keyword to call the constructor of the super class.
      - Instance properties must be defined inside of class methods
     */
    this.age = age;
    this.name = name;
    this.fullName = function () {};
  }

  //The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
  static someProperty = "Hello";
  static name() {}

  //prototype method
  someXYZ() {}
}

//re-writing the Circle function
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("this in circle:", this);
  }

  parent() {
    console.log("parent function call with this:", this); //Circle {radius: 10}
    return () => {
      console.log("inner function call with this:", this); // Circle {radius: 10}
    };
    // return function () {
    //   console.log('inner function call with this:', this) // window
    // } // to prevent it, we use bind method..
  }
}

const circle = new Circle(10);

//this syntax is called: METHOD CALL
circle.draw(); // Circle object

// FUNCTION CALL, it act as a stand alone function, which is not part of an object
const draw = circle.draw;
draw(); //undefined
draw.call(circle); //Circle object

//TOPIC: private member using symbol

//symbol is a unique identifier, symbol() === symbol() //false;
const _name = Symbol();
const _fullName = Symbol();
class Person {
  constructor(name) {
    //this._name = name, using symbol, we need to use square bracket
    this[_name] = name;
  }

  _fullName() {
    return `fullName is ${this[_name]} kumar`;
  }
}

const p1 = new Person("anoop");

//TODO: private member using weakMap
const _firstName = new WeakMap();

class Student {
  constructor(name) {
    _firstName.set(this, name); //private member

    //TODO: getter and setter  ES5
    //to read some private value from outside, one way is to create a function, returning that value or do it through setter and getter
    Object.defineProperty(this, "_firstName", {
      get: function () {
        return _firstName.get(this);
      },
    });
  }

  //TODO: getter and setter  ES6
  get name() {
    return _firstName.get(this);
  }
  set name(value) {
    _firstName.set(this, value);
  }

  getName() {
    return `the student name is ${_firstName.get(this)}`;
  }
}

const s1 = new Student("anoop");

/**
TOPIC: inheritance

 * easy to implement in es6
 * no re-setting of constructor
 * easy to call the base property
 */
class Shape {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  draw() {
    console.log(`Calling the base function in ${this.name}`);
  }
}

//inheritance with extends
class Circle1 extends Shape {
  constructor(color, name, radius) {
    super(color, name);
    this.radius = radius;
  }

  move() {
    console.log(`moving a circle`);
  }

  //TODO: Method overriding
  draw() {
    //can also call the base move method..
    super.draw();
    console.log("its draw of circle class");
  }
}

const c1 = new Circle1("red", "circle", 10);

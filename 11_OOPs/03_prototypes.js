/**
TODO: Inheritance
 * inheritance enables to take on the property and methods of another object. and this make easy to re-use code, in different part of the application.
 *
 *  PROTOTYPE: MEANS PARENT, OBJECT CONSTRUCTED WITH THAT PROTOTYPE HAS ALL THE PROPERTY AND METHOD OF IT'S PARENT.
 *
 *  ONLY ROOT/BASE/PARENT/PROTOTYPE HAS NOT PARENT: in js Object is the root object for everything
 * 
 * 
 * *TODO: if you don't other to create of some constructor..
 *  if (this.constructor === Person) {
      throw new Error("you can not create a instance of Person...");
    }
 *
 */

//to get/check the prototype of the any object, we can use
let name_of_object = {};
Object.getPrototypeOf(name_of_object);

let user_age = 23;
user_age.toString();
//!though the toString() method is not defined in user_age, the js engine walks up the prototype chain, and see for toString method. if it find then return the value, if not then error.

//TODO: multi level inheritance
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`drawing a circle in constructor function...`);
  };
}

const circle1 = new Circle(10);
const circle2 = new Circle(20);

//Object created by a given constructor will have the same prototype.
//circle1 & circle2 has Circle as Prototype and Circle has Object as Prototype.

//TODO: Property Attributes
let person = {
  name: "Anoop",
};

//in js property has attributes attached to them
const objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(
  objectBase,
  "toString"
);
console.log(propertyDescriptor);
/**
  configurable: true : if we want to delete the obj
  enumerable: false  : is the reason for not letting the prototype property getting iterable
  value: ƒ toString()
  writable: true : we can over-write the method
 */

Object.defineProperty(person, "name", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: "anuj",
});

//TODO: prototype vs instance members
function Circle1(radius) {
  //instance member
  this.radius = radius;
}

/**
IMP:if we have a multiple circle object, then it will create that my @radius and @draw, in the memory. taking large space for the same things.
*/

//prototype member
//IMP:Constructor(like circle).prototype === is the same as Object.getPrototype(c1)
Circle1.prototype.draw = function () {
  console.log(`drawing a circle in constructor function...`);
};
Circle1.prototype.move = function () {
  console.log(`moving a circle1 in constructor function...`);
};

const c1 = new Circle1(10);

/*
 * we can override the prototypical member...
 */
Circle.prototype.toString = function () {
  return `this is not what i expected...`;
};

//TOPIC: iterating instance and prototype member
//Object.keys(): give only the instance member
Object.keys(c1); //[radius]

//for-in : also give the prototype member
for (const key in c1) {
  console.log(`Keys: ${key}`);
}

//c1.hasOwnProperty('draw'): to check if the property is own or prototype

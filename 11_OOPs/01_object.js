//TODO: Creating Object:

//1. object literal
const circle = {
  // object in js, is a collection of key, value pair.
  radius: 1,
  //method
  move: function () {
    console.log(`move the circle...`);
  },
  //* new syntax of ES6
  draw() {
    console.log(`drawing a circle literal...`);
  },
};

// 2. factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(`drawing a circle in factory function...`);
    },
  };
}

const circle2 = createCircle(10);

// 3. constructors
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`drawing a circle in constructor function...`);
  };
}

/**
 *  when we use the new operator, few things happens
 *      - new operator will create a empty object in the memory
 *      - then it will set 'this' to point to that object. (by default it point to global object)
 *      - return that object
 */
const circle3 = new Circle(20); //not using new, this will point to global obj.

//IMP: Constructor property:
/*
 * Every object in js, have a constructor property, that references the function that was used to create/construct that object.
 */
const obj = {}; //same as new Object();

//TOPIC: Adding and removing Property:

/**
 * Object in js are dynamic, we can add and remove property at run time.
 */

const user = {
  name: "Anoop kumar",
  age: 29,
  sex: "M",
};

//adding, with sq or same can be done with dot(.)
user["some-xyz"] = "something i don't know";
user.occupation = "programmer";

//deleting
delete user.sex;

//TODO: Enumerating Property:

const person = {
  name: "sham",
  age: 45,
  getAddress() {
    console.log(`somewhere in india...`);
  },
};

//FOR-IN
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(`Property: ${element} has type: ${typeof person[key]}`);
  }

  //we can check of the existence of a property by
  if ("age" in person) {
    console.log("age is present in person object");
  }
}

//Object.Key
Object.keys(person); //["name", "age", "getAddress"] array of keys

//TODO:
//https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408

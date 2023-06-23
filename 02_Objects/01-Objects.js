let _obj = new Object(); // "object constructor" syntax
let _user = {}; // "object literal" syntax

// an object: put some properties into {...} as “key: value” pairs:
let _person = {
  name: "John",
  age: 30,

  //!function in a object is called as a Method

  fullName: function () {
    return `${this.name} is ${this.age} old!!`;
  },
};

/**-------------------------------------------------------- */

//TODO: Creating Object:

//1. object literal
const circle = {
  radius: 1,
  move: function () {
    console.log(`move the circle...`);
  },
  //! new syntax of ES6
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

/*
TOPIC: Constructor function
Constructor functions technically are regular functions. There are two conventions though:

       1. They are named with capital letter first.
       2. They should be executed only with "new" operator.

When a function is executed with new, it does the following steps:

        -A new empty object is created and assigned to this.
        -The function body executes. Usually it modifies this, adds new properties to it.
        -The value of this is returned.

    function User(name) {
         this = {};  (implicitly) --- 1

        //add properties to this --- 2
        this.name = name;
        this.isAdmin = false;

        return this;  (implicitly) ----3
    }
*/
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`drawing a circle in constructor function...`);
  };
}

const circle3 = new Circle(20); //not using new, this will point to global obj.

/*
IMP: Constructor property:
 
* Every object in js, have a constructor property, that references the function that was used to create/construct that object.
 */
const obj = {}; //same as new Object();

/**
TOPIC: Adding and removing Property:

 * !Object in js are dynamic, we can add and remove property at run time.
 */

const user = {
  name: "Anoop kumar",
  age: 29,
  sex: "M",
};

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

/*

!https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408

TOPIC:Compare 2 Objects in JavaScript
document.write(JSON.stringify(obj1) === JSON.stringify(obj2)); 
Object.entries(obj1).toString() === Object.entries(obj1).toString();

Stringify method is costlier in performance because it has to serialize the whole object whereas lodash can exit early if it finds a mismatched key.
*/

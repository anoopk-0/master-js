/*
Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities.
*/

let user = new Object(); // "object constructor" syntax
let _user = {}; // "object literal" syntax

//TOPIC: Literals and properties

// an object: put some properties into {...} as “key: value” pairs:
let person = {
  name: "John",
  age: 30,

  //function in a object is called as a Method
  fullName: function () {
    return `${this.name} is ${this.age} old!!`;
  },
};

//to check for an empty {}
//IMP:The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
function _isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false;
  }
  return true;
}

/**
IMP:Checking if a property exists

        (propertyName in objectName)
            
    The in operator returns true if the propertyName exists in the objectName.

IMP:The “for…in” loop

To walk over all keys of an object, there exists a special form of the loop: for..in
*/

for (key in object) {
  // executes the body for each key among object properties
}

let _person = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in _person) {
  console.log(key); // name, age, isAdmin

  console.log(_person[key]); // John, 30, true
}

/*
TOPIC:Compare 2 Objects in JavaScript

document.write(JSON.stringify(obj1) === JSON.stringify(obj2)); 

Object.entries(obj1).toString() === Object.entries(obj1).toString();

Stringify method is costlier in performance because it has to serialize the whole object whereas lodash can exit early if it finds a mismatched key.
*/

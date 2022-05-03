/*
Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities.
*/

//An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let _user = {}; // "object literal" syntax

//TOPIC: Literals and properties

// an object: put some properties into {...} as “key: value” pairs:
let person = {
  //A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30

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
*/

/*
TOPIC: The “for…in” loop

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
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(_person[key]); // John, 30, true
}

/*
README:
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

    To delete a property: delete obj.prop.
    To check if a property with the given key exists: "key" in obj.
    To iterate over an object: for (let key in obj) loop.
*/

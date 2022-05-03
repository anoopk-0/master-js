// An object is an unordered collection of key-value pairs. Each key-value pair is called a property.

let empty = {};

let person = {
  firstName: "John",
  lastName: "Doe",
};

//Accessing properties

//1) The dot notation (.)
person.firstName; // objectName.propertyName

//2) Array-like notation ( [])
person["firstName"];

//IMP:that it is not a good practice to use spaces in the property names of an object.

//IMP:Object is dynamic, we can add and delete property even after creating an Object.

person.age = 28;

//To delete a property of an object, use the delete operator:
`delete person.lastName;`;

/**
 //IMP:Checking if a property exists

            (propertyName in objectName)
            
    The in operator returns true if the propertyName exists in the objectName.
*/

let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

console.log("ssn" in employee); //fasle
console.log("employeeId" in employee); //true

/*
 A method is a function stored as a property.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/*
 //IMP: What is this?

        - In an object method, this refers to the object.
        - Alone, this refers to the global object.
        - In a function, this refers to the global object.
        - In a function, in strict mode, this is undefined.
        - In an event, this refers to the element that received the event.
        - Methods like call(), apply(), and bind() can refer this to any object.
*/

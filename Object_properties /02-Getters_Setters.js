/*
There are two kinds of object properties.

The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s an "accessor property". They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
*/

/*
TOPIC: Getters and setters

Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:
*/

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

// we want to add a fullName property, that should be "John Smith". Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

alert(user.fullName); // John Smith

//From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.

/*
TOPIC: Accessor descriptors

Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.




README:

A difference between using a getter or setter and using a standard function is that getters/setters are automatically invoked on assignment. So it looks just like a normal property but behind the scenes you can have extra logic (or checks) to be run just before or after the assignment.

So if you decide to add this kind of extra logic to one of the existing object properties that is already being referenced, you can convert it to getter/setter style without altering the rest of the code that has access to that property.

The most common use cases are 
    (1) securing access to data properties and 
    (2) adding extra logic to properties before getting or setting their values.
*/

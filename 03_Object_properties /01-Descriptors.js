/*
README:
objects can store properties.

TOPIC: Property flags
Object properties, besides a "value", have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

IMP: The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

`let _descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)`;
*/

let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

/* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
*/

/*
IMP: To change the flags, we can use Object.defineProperty.

`Object.defineProperty(obj, propertyName, descriptor)`;

1.obj, propertyName
    The object and its property to apply the descriptor.
2.descriptor
    Property descriptor object to apply.

If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.
*/

/*
TOPIC: Non-writable 

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

Errors appear only in strict mode:
In the non-strict mode, no errors occur when writing to non-writable properties and such. But the operation still won’t succeed. Flag-violating actions are just silently ignored in non-strict.

TOPIC: Non-configurable

The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

IMP:"A non-configurable property can’t be deleted, its attributes can’t be modified".

For instance, Math.PI is non-writable, non-enumerable and non-configurable:

IMP:Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

Object.defineProperty(user, "name", {
  configurable: false
});

user.name = "Pete"; // works fine
delete user.name; // Error

TOPIC: Object.defineProperties

There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

The syntax is:
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
So, we can set many properties at once.

TOPIC: Sealing an object globally

Object.seal(obj)
Forbids adding/removing of properties. Sets "configurable: false" for all existing properties.

Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties
*/

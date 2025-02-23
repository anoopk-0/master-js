# Property Flags in JavaScript Objects

In JavaScript, objects can store not only data but also metadata about their properties. This metadata is known as property flags. These flags define how a property behaves, and they control things like whether the property can be modified, enumerated in loops, or deleted.

### 1. Property Flags Overview

Each property in an object has the following flags:

- writable: If `true`, the property value can be changed; if `false`, the property is read-only.
- enumerable: If `true`, the property will appear in `for...in` loops and `Object.keys()`. If `false`, the property will be hidden from enumeration.
- configurable: If `true`, the property can be deleted and its flags (such as writable, enumerable) can be changed. If `false`, the property cannot be deleted or redefined.

These flags are part of the property descriptor, which holds metadata for every property in an object.

### 2. Accessing Property Descriptors

To inspect the flags and other information about a property, we can use the method `Object.getOwnPropertyDescriptor()`. It provides a full descriptor object for the given property, which contains information about the property's value, writability, enumerability, and configurability.

```javascript
let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);
/*
{
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```

In the example above, we used `Object.getOwnPropertyDescriptor()` to retrieve the descriptor of the `name` property in the `user` object. The output shows the flags:

- `writable: true` (the value can be modified),
- `enumerable: true` (it can be listed in loops),
- `configurable: true` (it can be deleted or redefined).

### 3. Modifying Property Flags with `Object.defineProperty()`

If you want to modify the flags of a property, you can use `Object.defineProperty()`. This method allows you to change the descriptors of an existing property, such as making it non-writable or non-enumerable.

```javascript
let user = {
  name: "John",
};

// Make 'name' property non-writable
Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Jane"; // This will not change the value because 'name' is non-writable
console.log(user.name); // Output: "John"
```

Here, we used `Object.defineProperty()` to make the `name` property non-writable. After the change, attempting to modify the `name` property has no effect.

```javascript
let user = {
  name: "John",
};

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false, // Now, 'name' will not show up in loops
});

for (let key in user) {
  console.log(key); // Nothing will be logged because 'name' is now non-enumerable
}
```

This demonstrates how to modify both the `writable` and `enumerable` flags.

### 4. Non-Writable Properties

A non-writable property cannot be changed after it’s been set. If you try to change the value of such a property, an error will occur in strict mode, but in non-strict mode, the operation will simply fail silently.

```javascript
"use strict";

let user = {
  name: "John",
};

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Jane"; // This will throw an error in strict mode
console.log(user.name); // Output: "John" because the assignment failed
```

In strict mode, attempting to change the value of a non-writable property will result in a `TypeError`. In non-strict mode, no error occurs, but the change doesn’t succeed.

### 5. Non-Configurable Properties

A non-configurable property cannot have its attributes changed (like `writable`, `enumerable`, or `configurable`), and it cannot be deleted.

```javascript
let user = {
  name: "John",
};

Object.defineProperty(user, "name", {
  configurable: false,
});

delete user.name; // The property cannot be deleted
console.log(user.name); // Output: "John"

Object.defineProperty(user, "name", {
  writable: false, // Attempting to modify the property descriptor will fail
}); // Error in strict mode
```

Once a property is made non-configurable, you cannot change its configuration or delete it. This is important for built-in JavaScript objects like `Math.PI`, which are non-writable, non-enumerable, and non-configurable.

Important Note: Once a property is made non-configurable, you cannot change it back. This is a one-way operation.

### 6. Using `Object.defineProperties()` for Multiple Properties

If you need to define multiple properties at once, you can use `Object.defineProperties()`, which allows you to set the descriptors for multiple properties in a single call.

```javascript
let user = {};

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Doe", writable: false },
});

console.log(user.name); // Output: John
console.log(user.surname); // Output: Doe

user.name = "Jane"; // This won't change the value because it's non-writable
console.log(user.name); // Output: John
```

Here, we define two properties (`name` and `surname`) with `Object.defineProperties()`. Both properties are set to be non-writable, so any changes to their values won’t take effect.

### 7. Sealing and Freezing Objects

JavaScript provides two methods to restrict the modification of objects:

- `Object.seal(obj)`: Seals an object, preventing new properties from being added or existing properties from being removed. It also makes all existing properties non-configurable.

- `Object.freeze(obj)`: Freezes an object, preventing any modifications. It not only prevents adding/removing properties but also makes all properties non-writable and non-configurable.

```javascript
let user = {
  name: "John",
};

Object.seal(user);

user.age = 30; // Cannot add new properties
delete user.name; // Cannot delete properties
user.name = "Jane"; // Can modify existing properties
console.log(user); // Output: { name: "Jane" }
```

Here, the object is sealed using `Object.seal()`, which prevents the deletion and addition of properties. However, existing properties can still be modified.

```javascript
let user = {
  name: "John",
};

Object.freeze(user);

user.age = 30; // Cannot add new properties
delete user.name; // Cannot delete properties
user.name = "Jane"; // Cannot modify existing properties
console.log(user); // Output: { name: "John" }
```

After calling `Object.freeze()`, the object is completely immutable. No properties can be added, removed, or modified.

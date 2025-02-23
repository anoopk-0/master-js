# Understanding Object References, Cloning, and Merging in JavaScript

In JavaScript, **objects** and **primitives** behave differently when assigned to variables, and this difference is crucial to understanding how data is managed in your programs.

#### Primitives vs Objects

One of the fundamental distinctions between **primitives** (like strings, numbers, booleans, etc.) and **objects** (arrays, functions, plain objects) lies in how they are stored and copied.

- **Primitives** are copied **by value**. When you assign a primitive value to a new variable, the new variable holds an independent copy of the value, and any changes made to one do not affect the other.

  ```javascript
  let message = "Hello!";
  let phrase = message; // phrase is now a copy of message

  // Modifying phrase does not affect message
  phrase = "Goodbye!";
  console.log(message); // "Hello!"
  console.log(phrase); // "Goodbye!"
  ```

- **Objects**, on the other hand, are copied **by reference**. When you assign an object to a new variable, the new variable does not hold a copy of the object, but rather a reference (or memory address) to the same object. Thus, modifying the object through either reference will affect both variables, as they both point to the same object.

  ```javascript
  let user = {
    name: "John",
  };

  let admin = user; // admin holds a reference to the same object as user

  admin.name = "Alice"; // Modifying the object through admin

  console.log(user.name); // "Alice" - Changes are reflected in both references
  console.log(admin.name); // "Alice"
  ```

### Cloning Objects: `Object.assign()` and Custom Cloning

When you need to create a new object based on an existing one, you might want to **clone** the object. However, remember that just copying the reference will not create a true clone; it will simply point to the same object in memory. To create a true copy, you need to either manually clone the object or use built-in utilities like `Object.assign()`.

#### 1. **Shallow Cloning using `Object.assign()`**

The `Object.assign()` method is a built-in JavaScript function that allows you to copy the properties of one or more source objects into a destination object. It performs a **shallow copy**, meaning it only copies the top-level properties. If the object contains nested objects (like arrays or other objects), those are still copied by reference.

```javascript
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // Create a new empty object

// Using Object.assign() to clone the properties of user into clone
Object.assign(clone, user);

console.log(clone); // { name: "John", age: 30 }
console.log(user === clone); // false: clone is a different object than user
```

- **Shallow Cloning**: If the object has nested objects, like arrays or other objects inside it, those nested objects will still be copied by reference. This can lead to unintended side effects if you modify nested properties of the cloned object, as it will also affect the original object.

```javascript
let user = {
  name: "John",
  settings: {
    theme: "dark",
  },
};

let clone = {};
Object.assign(clone, user);

// Changing a nested object property in clone also affects the original object
clone.settings.theme = "light";

console.log(user.settings.theme); // "light" - Both user and clone share the same reference to settings
console.log(clone.settings.theme); // "light"
```

#### 2. **Deep Cloning using Recursion**

To properly clone objects with nested structures (where nested objects are also cloned and not shared by reference), you need a **deep clone**. A deep clone recursively copies every property of an object and its nested objects, ensuring that no references to nested objects are shared between the original and the cloned object.

You can create a deep clone using recursion. Here's an example of how to do it manually:

```javascript
function deepClone(target) {
  if (typeof target === "object" && target !== null) {
    // Create a new object for non-primitive types
    let cloneTarget = Array.isArray(target) ? [] : {}; // Handle arrays as well

    for (const key in target) {
      // Recursively clone nested objects or arrays
      cloneTarget[key] = deepClone(target[key]);
    }

    return cloneTarget;
  } else {
    // For primitive types, return the value itself
    return target;
  }
}

let user = {
  name: "John",
  settings: {
    theme: "dark",
    preferences: {
      notifications: true,
    },
  },
};

let clonedUser = deepClone(user);
clonedUser.settings.theme = "light"; // Modify nested property

console.log(user.settings.theme); // "dark" - Original object remains unchanged
console.log(clonedUser.settings.theme); // "light" - Cloned object is independent
```

In this example, the `deepClone` function recursively checks if the property is an object. If it is, it creates a new object and continues to clone its properties recursively. If it's a primitive value, it simply returns the value. This ensures that all objects and arrays are cloned deeply, so modifications to nested properties in the cloned object do not affect the original object.

### 3. **Using Libraries like Lodash**

Instead of writing your own recursive cloning function, you can use libraries like **Lodash**, which provides a built-in `_.cloneDeep()` method to perform deep cloning.

```javascript
// Using Lodash for deep cloning
const _ = require("lodash");

let user = {
  name: "John",
  settings: {
    theme: "dark",
    preferences: {
      notifications: true,
    },
  },
};

let clonedUser = _.cloneDeep(user);
clonedUser.settings.theme = "light";

console.log(user.settings.theme); // "dark" - Original object remains unchanged
console.log(clonedUser.settings.theme); // "light" - Cloned object is independent
```

This method provides a simple and efficient way to deep clone objects without manually writing the cloning logic.

### Merging Objects with `Object.assign()`

`Object.assign()` is also useful for merging multiple objects into one. You can pass multiple source objects as arguments, and their properties will be copied into the destination object. If the destination object already has a property with the same key, it will be overwritten by the last source object.

```javascript
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

let user = { name: "John", age: 30 };

Object.assign(user, permissions1, permissions2);

console.log(user);
// Output: { name: "John", age: 30, canView: true, canEdit: true }
```

- **Note**: If the source objects have properties with the same key, the last one will overwrite the earlier ones. For instance, if both `permissions1` and `permissions2` had a `canEdit` property, the value from `permissions2` would be used.

### The `Object.create()` Method

The `Object.create()` method allows you to create a new object with a specified prototype. It is different from both cloning and merging because it is used to create a new object based on an existing object without copying the properties.

```javascript
let user = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

let admin = Object.create(user);
admin.name = "Alice";

admin.greet(); // "Hello, Alice" - Inherits greet method from user
```

- In this case, `admin` is created with `user` as its prototype, meaning it inherits all properties and methods of `user`, but the two objects are distinct. Any changes made to `admin`'s properties (like `name`) won't affect `user`, but they will still have access to `user`'s methods (like `greet()`).

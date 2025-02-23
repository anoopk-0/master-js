# Data Properties vs. Accessor Properties in JavaScript

In JavaScript, there are two types of object properties: **data properties** and **accessor properties**.

### 1. **Data Properties**

These are the most common properties that we've been using in our examples. A data property stores a value directly. For instance:

```javascript
let person = {
  name: "John",
  age: 30,
};

console.log(person.name); // "John"
console.log(person.age); // 30
```

Data properties have the following flags: `value`, `writable`, `enumerable`, and `configurable`. These determine how the property behaves—whether you can modify its value, iterate over it in loops, or change its descriptors.

### 2. **Accessor Properties**

Accessor properties are a bit different from regular data properties. Instead of holding a value directly, they act as functions that run when you **get** or **set** a property. These functions are called **getters** and **setters**.

- **Getter**: A method that is invoked when the property is accessed (retrieved).
- **Setter**: A method that is invoked when a new value is assigned to the property.

Although accessors look like regular properties when accessed or set, they are actually functions that get or set the property values.

### Example: Getters and Setters

Here’s an example of how to define and use getters and setters in an object:

#### Example 1: Accessor Property with Getter

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user.fullName); // "John Smith"
```

In this example:

- `fullName` is an **accessor property**.
- The `get fullName()` method is called when you access `user.fullName`, but it looks just like a regular property.
- Behind the scenes, the getter executes and returns the concatenated `name` and `surname`.

#### Example 2: Accessor Property with Getter and Setter

Sometimes, you may want to **set** a property through a setter as well. Let’s modify the `fullName` property to allow setting the `name` and `surname` together:

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    let [name, surname] = value.split(" ");
    this.name = name;
    this.surname = surname;
  },
};

// Getting fullName (using the getter)
console.log(user.fullName); // "John Smith"

// Setting fullName (using the setter)
user.fullName = "Alice Johnson";
console.log(user.name); // "Alice"
console.log(user.surname); // "Johnson"
```

In this case:

- The **getter** (`get fullName()`) returns the full name.
- The **setter** (`set fullName(value)`) splits the input string into `name` and `surname` and assigns them to the respective properties.

This shows how getters and setters enable custom logic to be executed when getting or setting a property, even though it looks like a regular property on the outside.

## Accessor Descriptors

The descriptors for **accessor properties** differ from data properties. Data properties have the `value`, `writable`, `enumerable`, and `configurable` flags, but accessor properties only have `get`, `set`, `enumerable`, and `configurable`.

#### Accessor Property Descriptor Example

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    let [name, surname] = value.split(" ");
    this.name = name;
    this.surname = surname;
  },
};

let descriptor = Object.getOwnPropertyDescriptor(user, "fullName");

console.log(descriptor);
/* Output:
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
*/
```

In the example above:

- **`get`** and **`set`** are the methods for retrieving and setting the `fullName` property.
- **`enumerable`** and **`configurable`** are flags that determine whether the property shows up in loops (e.g., `for...in`) and whether its attributes can be modified.

### Why Use Getters and Setters?

#### 1. **Securing Access to Data Properties**

One of the common use cases for getters and setters is securing access to internal data. You can encapsulate internal state and provide controlled access through getter/setter methods.

#### Example: Securing Access to Internal Data

```javascript
let user = {
  _name: "John", // Private property

  get name() {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1); // Capitalize first letter
  },

  set name(value) {
    if (value.length < 3) {
      console.log("Name is too short.");
    } else {
      this._name = value;
    }
  },
};

console.log(user.name); // "John"
user.name = "Al"; // Name is too short.
user.name = "Alice"; // Updates the name
console.log(user.name); // "Alice"
```

In this example:

- The internal `_name` property is kept private (with an underscore).
- The getter `name` capitalizes the first letter of the name when accessed.
- The setter `name` checks if the new name is too short before updating the value.

#### 2. **Adding Extra Logic**

Another reason to use getters and setters is to add extra logic when accessing or updating properties. For example, you might need to validate data or perform some calculations before setting or getting the value.

### Key Differences Between Getters/Setters and Functions

- **Automatic Invocation**: Unlike functions, getters and setters are automatically invoked when you access or assign a property. This gives the appearance of normal properties, but behind the scenes, you can implement logic.

- **Encapsulation**: Getters and setters help encapsulate and hide the internal state of an object, while still providing an interface to interact with it.


# JavaScript Objects

An **object** in JavaScript is an unordered collection of **key-value pairs**. Each pair consists of a **key** (or property) and a **value**. The value can be any data type, including another object.

#### **Creating an Object**

```javascript
let empty = {}; // Empty object

let person = {
  firstName: "John",
  lastName: "Doe",
};
```

### **1. Accessing Properties**

1. **Dot Notation**
   - This is the most common way to access properties.
   ```javascript
   person.firstName; // "John"
   ```

2. **Bracket Notation**
   - Useful when the property name is dynamic or contains spaces.
   ```javascript
   person["firstName"]; // "John"
   ```

**Note**: Avoid spaces in property names. If needed, use bracket notation.

### **2. Modifying Objects**

You can **add**, **modify**, or **delete** properties after the object is created.

```javascript
// Adding a property
person.age = 28;

// Deleting a property
delete person.lastName;
```

### **3. Checking if a Property Exists**

Use the `in` operator to check if a property exists in an object.

```javascript
let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

console.log("ssn" in employee); // false
console.log("employeeId" in employee); // true
```

### **4. Methods in Objects**

A **method** is a function that is stored as a property of an object.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "John Doe"
```

- **`this` in Methods**:
  - In an object method, `this` refers to the object itself.
  - In strict mode or standalone functions, `this` refers to `undefined`.
  - In event handlers, `this` refers to the element that triggered the event.
  - Methods like `call()`, `apply()`, and `bind()` can change the context of `this`.


## **Object Utility Methods**

1. **`Object.keys(obj)`** – Returns an array of the object's property names (keys).
   ```javascript
   Object.keys(person); // ["firstName", "lastName", "fullName"]
   ```

2. **`Object.values(obj)`** – Returns an array of the object's property values.
   ```javascript
   Object.values(person); // ["John", "Doe", function]
   ```

3. **`Object.entries(obj)`** – Returns an array of `[key, value]` pairs.
   ```javascript
   Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ["fullName", function]]
   ```

4. **`Object.fromEntries()`** – Converts an array of `[key, value]` pairs back into an object.
   ```javascript
   let prices = {
     banana: 1,
     orange: 2,
     meat: 4,
   };

   let doublePrices = Object.fromEntries(
     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
   );

   console.log(doublePrices); // { banana: 2, orange: 4, meat: 8 }
   ```


### **Important Points**

- **Objects are dynamic**: You can add, modify, or delete properties after an object is created.
- **`this` keyword**: In object methods, `this` refers to the object itself. Its behavior changes based on context (functions, strict mode, event handlers, etc.).
- **Objects are unordered**: The keys in an object do not have a defined order. However, modern engines generally iterate over them in insertion order.

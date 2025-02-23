# Variables in JavaScript

A variable is a named storage for data. It acts as a label that references a value, such as a number, string, or object. Variables allow you to store and manipulate data in your code.

> **NOTE**: In JavaScript, variables are dynamically typed, meaning you don’t need to specify the type of data they will store, unlike in statically typed languages like Java or C#.

#### There are two main rules for naming variables in JavaScript:

1. **Valid characters:** Variable names can only include letters (A-Z, a-z), digits (0-9), underscores (`_`), or dollar signs (`$`).

2. **First character:** The first character of a variable name cannot be a digit or any special character.

To declare a variable, you use the `let`, `const` or `var` keyword, followed by the variable name and an optional value assignment:

```javascript
let message; // Declaring a variable without assigning a value
let _message = "Hello, JavaScript!"; // Declaring and initializing a variable
```

### Undefined vs. Undeclared Variables

**`Undefined Variable`:** An **undefined** variable has been declared but not yet assigned a value. It’s automatically assigned the value `undefined`. Its default value is undefined.

```js
let counter;
console.log(counter); // Output: undefined, since 'counter' is declared but not assigned a value
```

**`Undeclared Variable`:** An **undeclared** variable is one that has not been declared using `let`, `var`, or `const`. Accessing an undeclared variable will result in a `ReferenceError`.

```javascript
console.log(counter); // Error: counter is not declared
```

## `let`, `const`, and `var` in JavaScript

In JavaScript, variables are used to store and manage data. The way you declare a variable determines how it can be used and modified in your code. The two most common ways to declare variables are using `let` and `const`. Here's a detailed explanation of each:

### 1. **`let`**

The `let` keyword is used to declare **block-scoped variables**. These variables can be reassigned (their value can change), but they are only accessible within the block (e.g., inside `{}`) where they are declared.

#### Key Features of `let`:

- **Reassignable:** You can change the value of a variable declared with `let`.

- **Block-Scoped:** The variable is only accessible within the block where it is defined.

- **Hoisting:** Variables declared with `let` are hoisted to the top of their block, but they are not initialized. Accessing them before declaration results in a `ReferenceError`.

#### Example:

```javascript
let message = "Hello";
message = "Hi"; // Reassigning is allowed
console.log(message); // Output: Hi

if (true) {
  let blockScoped = "I'm inside a block";
  console.log(blockScoped); // Output: I'm inside a block
}
console.log(blockScoped); // Error: Uncaught ReferenceError: blockScoped is not defined
```

### 2. **`const`**

The `const` keyword is used to declare **constants**. These are variables whose value cannot be reassigned after initialization. Like `let`, `const` is also block-scoped.

#### Key Features of `const`:

- **Immutable Value:** Once a value is assigned to a `const` variable, it cannot be changed.

- **Block-Scoped:** The variable is only accessible within the block where it is defined.

- **Must Be Initialized:** A `const` variable must be assigned a value when it is declared.

- **Hoisting:** Variables declared with `const` are hoisted to the top of their block, but they are not initialized. Accessing them before declaration results in a `ReferenceError`.

#### Example:

```javascript
const PI = 3.14;
PI = 3.14159; // Error: Uncaught TypeError: Assignment to constant variable

const user = { name: "Alice" };
user.name = "Bob"; // Allowed: Modifying properties of an object
console.log(user.name); // Output: Bob

user = { name: "Charlie" }; // Error: Reassigning the variable is not allowed
```

### 3. **`var` (Legacy)**

Before `let` and `const`, JavaScript used the `var` keyword to declare variables. However, `var` has some quirks that make it less predictable compared to `let` and `const`.

#### Key Features of `var`:

- **Function-Scoped:** Variables declared with `var` are scoped to the function, not the block.

- **Hoisting:** Variables declared with `var` are hoisted to the top of their function and initialized with `undefined`.

- **Reassignable:** Like `let`, `var` variables can be reassigned.

#### Example:

```javascript
var x = 10;
if (true) {
  var x = 20; // Same variable, reassigned
  console.log(x); // Output: 20
}
console.log(x); // Output: 20 (not block-scoped)
```

### Hoisting Behavior

Hoisting behavior in JavaScript refers to how variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. However, the way **`var`**, **`let`**, and **`const`** are hoisted differs, and it's important to understand these differences for correct behavior in your code.

#### 1. **Hoisting Behavior of `var`**

- **Hoisted to the top of the scope:**

  - `var` declarations are hoisted to the top of the **function scope** (or **global scope** if declared outside of a function).

  - **Initialized with `undefined`:** Variables declared with `var` are **initialized with `undefined`** when hoisted, meaning the variable exists in the scope but has no value until it is explicitly assigned.

**Example of hoisting with `var`:**

```javascript
console.log(x); // Output: undefined (hoisted but uninitialized)
var x = 10;
console.log(x); // Output: 10 (after initialization)
```

#### 2. **Hoisting Behavior of `let` and `const`**

- **Hoisted to the top of the block scope:**

  - Both `let` and `const` are hoisted to the top of their **block scope** (e.g., inside functions, loops, or conditionals), meaning they are only accessible within the block in which they are declared.

  - **Not initialized:** Unlike `var`, `let` and `const` are **not initialized** when hoisted. Instead, they exist in a "temporal dead zone" (TDZ) from the beginning of the block until the point where the declaration is encountered.

  - If you try to access the variable in the TDZ (before its declaration), JavaScript will throw a `ReferenceError`.

**Example with `let`:**

```javascript
console.log(a); // Error: Cannot access 'a' before initialization
let a = 5;
console.log(a); // Output: 5 (after initialization)
```

**Example with `const`:**

```javascript
console.log(b); // Error: Cannot access 'b' before initialization
const b = 10;
console.log(b); // Output: 10 (after initialization)
```

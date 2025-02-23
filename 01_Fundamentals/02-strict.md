## Using "Strict Mode" in JavaScript

#### What is "use strict"?

The `"use strict"` directive in JavaScript enables strict mode, which is a way to enforce stricter parsing and error handling in your code. It helps you write more secure and predictable JavaScript by converting common coding mistakes into errors.

To activate strict mode, simply add `"use strict"` (or `'use strict'`) at the top of your JavaScript code. This applies strict mode to the entire script.

> **Note:** If you’re running code in the developer console, strict mode is not enabled by default.

#### Benefits of Strict Mode

Strict mode makes it easier to avoid common JavaScript pitfalls. Some of the key features of strict mode are:

1. **Prevents the use of undeclared global variables:** In non-strict mode, a mistyped variable name automatically creates a new global variable. Strict mode catches this error, enforcing the use of `var`, `let`, or `const` to declare variables.

2. **Disallows the deletion of non-deletable properties:** For example, trying to delete `Object.prototype` will throw an error in strict mode.

3. **Requires unique property names in objects:** In strict mode, you can’t have duplicate property names in an object literal, e.g., `{x1: "1", x1: "2"}` will throw an error.

4. **Forbids function parameter name duplication:** A function can't have duplicate parameter names, like `function sum(x, x) {}`.

5. **Disallows octal syntax:** The leading zero in numbers like `023` (which can imply octal in non-strict mode) is forbidden in strict mode.

6. **Prevents deletion of plain variables:** In strict mode, trying to delete a plain variable (e.g., `delete x;`) will throw an error.

#### Modern JavaScript Features and Strict Mode

> **NOTE**: In modern JavaScript, features such as **classes** and **modules** automatically enable strict mode. This means you don’t need to manually include `"use strict"` if you're using these advanced features, as strict mode is applied by default.

### Examples:

#### 1. **Preventing Accidental Global Variables**

In non-strict mode, mistyping a variable name creates a new global variable. Strict mode throws an error.

**Non-strict mode:**

```javascript
x = 10; // No error, creates a global variable 'x'
console.log(x); // Output: 10
```

**Strict mode:**

```javascript
"use strict";
x = 10; // Error: Uncaught ReferenceError: x is not defined
```

#### 2. **Disallowing Duplicate Parameter Names**

Strict mode prevents functions from having duplicate parameter names.

**Non-strict mode:**

```javascript
function sum(a, a) {
  return a + a;
}
console.log(sum(2, 3)); // Output: 6 (but this is misleading and error-prone)
```

**Strict mode:**

```javascript
"use strict";
function sum(a, a) {
  // Error: Uncaught SyntaxError: Duplicate parameter name not allowed in this context
  return a + a;
}
```

#### 3. **Preventing Octal Syntax**

In non-strict mode, numbers with leading zeros (e.g., `023`) are treated as octal (base 8). Strict mode disallows this.

**Non-strict mode:**

```javascript
console.log(023); // Output: 19 (octal 23 is 19 in decimal)
```

**Strict mode:**

```javascript
"use strict";
console.log(023); // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode
```

#### 4. **Disallowing Deletion of Plain Variables**

In non-strict mode, deleting a variable is allowed but does nothing. Strict mode throws an error.

**Non-strict mode:**

```javascript
var x = 10;
delete x; // No error, but doesn't delete 'x'
console.log(x); // Output: 10
```

**Strict mode:**

```javascript
"use strict";
var x = 10;
delete x; // Error: Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
```

#### 5. **Preventing Duplicate Property Names in Objects**

Strict mode throws an error if an object literal has duplicate property names.

**Non-strict mode:**

```javascript
var obj = { x: 1, x: 2 };
console.log(obj.x); // Output: 2 (last value wins)
```

**Strict mode:**

```javascript
"use strict";
var obj = { x: 1, x: 2 }; // Error: Uncaught SyntaxError: Duplicate data property in object literal not allowed in strict mode
```

#### 6. **Disallowing Assignment to Non-Writable Properties**

Strict mode throws an error if you try to assign a value to a non-writable property.

**Non-strict mode:**

```javascript
var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 100; // No error, but assignment fails silently
console.log(obj.x); // Output: 42
```

**Strict mode:**

```javascript
"use strict";
var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 100; // Error: Uncaught TypeError: Cannot assign to read-only property 'x' of object
```

#### 7. **Strict Mode in Functions**

You can enable strict mode for a specific function without enabling it for the entire script.

```javascript
function strictFunction() {
  "use strict";
  y = 20; // Error: Uncaught ReferenceError: y is not defined
}

function nonStrictFunction() {
  y = 20; // No error, creates a global variable 'y'
}

strictFunction();
nonStrictFunction();
console.log(y); // Output: 20 (from nonStrictFunction)
```

###  **Strict Mode in Classes and Modules**

In modern JavaScript, strict mode is automatically enabled in **classes** and **modules**, so you don’t need to add `"use strict"` manually.

**Class example:**

```javascript
class MyClass {
  constructor() {
    z = 30; // Error: Uncaught ReferenceError: z is not defined
  }
}

const obj = new MyClass();
```

**Module example:**

```javascript
// In a module file (e.g., script.js)
z = 30; // Error: Uncaught ReferenceError: z is not defined
```

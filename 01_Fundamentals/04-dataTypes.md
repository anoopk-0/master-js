## DataTypes

There are eight basic data types in JavaScript. which can be categorized into primitive and non-primitive types:

Primitive Data Types:

- These are immutable (cannot be changed) and store a single value.
- Includes: String, Number, BigInt, Boolean, undefined, null, and Symbol.

Non-Primitive Data Type (Object):

- Objects are mutable and can store collections of data (key-value pairs).

```text

    String     | represents textual data	                        | 'hello', "hello world!" etc
    Number	   | an integer or a floating-point number	            | 3, 3.234, 3e-2 etc.
    BigInt	   | an integer with arbitrary precision	            | 900719925124740999n , 1n etc.
    Boolean	   | Any of two values: true or false	                | true and false
    undefined  | a data type whose variable is not initialized	    | let a;
    null	   | denotes a null value	                            | let a = null;
    Symbol	   | data type whose instances are unique and immutable	| let value = Symbol('hello');
    Object	   | key-value pairs of collection of data	            | let student = { };

```

> **Note**: The Object data type (non-primitive type) can store `collections` of data, whereas primitive data type can only store a `single` data.

> **Note**: The `typeof` operator is used in JavaScript to determine the data type of a given variable or value. It returns a string indicating the type of the operand.

## NaN(Not a Number.) in JavaScript

NaN stands for Not a Number and is a special value in JavaScript used to represent invalid or undefined numeric results. It's a property of the global object and is commonly encountered in arithmetic operations that yield an undefined or erroneous result. `typeof NaN is "number"`

`Number.isNaN()` : This method accurately checks if a value is NaN without any type conversion.

#### NaN is typically returned:

- If you try to perform an arithmetic operation on a non-numeric value (like a string that doesn’t represent a number).

- If you attempt to parse an invalid number using parseInt() or parseFloat(), you may get NaN if the input cannot be parsed into a valid number.

- Some mathematical operations return NaN if the result is undefined or not possible, such as the square root of a negative number (in real numbers) or dividing zero by zero.

```js
## Any operation involving NaN returns NaN

console.log(NaN + 5);  // Output: NaN
console.log(NaN * 10); // Output: NaN
console.log(NaN / 2);  // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN (since square root of negative numbers is undefined in real numbers)

## NaN is not equal to anything, including itself:

console.log(NaN == NaN);  // Output: false
console.log(NaN === NaN); // Output: false
```

## “null” and "undefined" value

Both `null` and `undefined` represent the absence of a value in JavaScript, but they are distinct types with different purposes and behaviors.

#### 1. null

null is a primitive value, but it represents intentional absence of any object value. It is explicitly set by the programmer to indicate that a variable is empty or uninitialized. It’s commonly used to signify `no value` or `no object`.

It is explicitly assigned to variables to indicate that the variable should be empty or not point to any object.

```js
let a = null;
console.log(a); // null
console.log(typeof a); // "object" (this is a known quirk in JavaScript)
```

#### 2. undefined

undefined is its own type, i.e., a primitive value of type undefined. t indicates that a variable has been declared but has not been initialized with a value. It is the default value assigned to `uninitialized variables` or `missing function arguments`.

```js
let a;
console.log(a); // undefined (a is declared but not initialized)
console.log(typeof a); // "undefined"
```

## JavaScript Primitive vs. Reference Values

In JavaScript, values are categorized into two types: **primitive values** and **reference values**. These two categories behave differently when it comes to assignment, comparison, and passing values to functions.

- **Primitive values** are simple, immutable data types that are stored directly and are considered atomic (i.e., indivisible). Examples of primitive values are `null`, `undefined`, `boolean`, `number`, `string`, `symbol`, and `BigInt`.
- **Reference values** refer to objects, which can hold multiple values or properties. These include objects, arrays, and functions.

#### Stack and Heap Memory

When variables are declared, JavaScript allocates memory in two different locations: the **stack** and the **heap**.

1. **Stack Memory**: This is where primitive values are stored. The stack is for static data—data that has a fixed size known at compile time. These values are stored directly, and their memory locations are managed by the JavaScript engine.

2. **Heap Memory**: This is where objects (including functions and arrays) are stored. The heap is for dynamic data—data whose size might change during runtime. When an object is created, the JavaScript engine allocates memory for it on the heap, and it can expand or shrink as needed.

## copying values

When it comes to copying values in JavaScript, **primitive values** and **reference values** behave very differently. Understanding how copying works with each is crucial, especially in situations where you’re dealing with assignments or passing values to functions.

### Copying Primitive Values

Primitive values are **copied by value**. When you assign a primitive value from one variable to another, a new copy of the value is created. These values are independent of each other, so changes to one do not affect the other.

```javascript
let a = 10;
let b = a; // b gets a copy of the value of a

b = 20; // Changing b does not affect a

console.log(a); // 10
console.log(b); // 20
```

### Copying Reference Values

Reference values are **copied by reference**. This means that when you assign a reference value (such as an object or an array) to another variable, both variables point to the same object or array in memory. Modifying one will affect the other because both variables are referencing the same underlying memory location.

```javascript
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // obj2 now references the same object as obj1

obj2.age = 26; // Modifying obj2 affects obj1 because they refer to the same object

console.log(obj1.age); // 26
console.log(obj2.age); // 26
```

### Making a Copy of Reference Values

If you want to create a **shallow copy** of an object (or array) so that changes to one don’t affect the other, you can use methods like `Object.assign()` for objects or the spread operator (`...`) for arrays and objects.

#### Shallow Copy Example (Objects):

```javascript
let obj1 = { name: "Alice", age: 25 };
let obj2 = Object.assign({}, obj1); // Creates a shallow copy of obj1

obj2.age = 26; // Changes only obj2

console.log(obj1.age); // 25
console.log(obj2.age); // 26
```

#### Shallow Copy Example (Arrays):

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Creates a shallow copy of arr1

arr2[0] = 10; // Changes only arr2

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [10, 2, 3]
```

### Deep Copying Reference Values

A **deep copy** creates a new object or array, and recursively copies all nested objects or arrays. This ensures that changes in the new object don’t affect the original, even for deeply nested structures. You can create a deep copy manually or use libraries like Lodash's `cloneDeep()` function.

#### Example of Deep Copy (Objects):

```javascript
let obj1 = { name: "Alice", address: { city: "NYC", zip: "10001" } };
let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy using JSON methods

obj2.address.city = "LA"; // Changes only obj2

console.log(obj1.address.city); // 'NYC'
console.log(obj2.address.city); // 'LA'
```

In this example, we used `JSON.parse()` and `JSON.stringify()` to create a deep copy of `obj1`. This works well for simple structures, but be cautious with more complex objects, as it won't handle methods or special object types like `Date` or `RegExp`.

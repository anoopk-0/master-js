# JavaScript Arrays

An array is an ordered collection of values. Each value is referred to as an element, and each element has an index, starting from 0. Arrays are special objects with numeric indexes.

#### Creating Arrays

1. Array Literal (simplest way):

   ```javascript
   const numbers = [1, 2, 3];
   ```

2. Array Constructor:
   ```javascript
   const cars = new Array("Saab", "Volvo", "BMW");
   ```

Common Error:

```javascript
const points = [10]; // [10]
const points = new Array(10); // [empty × 10]
```

> Note: Arrays are a special type of object in JavaScript. `typeof` returns "object" for arrays, but they have numbered indexes.

### Recognizing an Array

Use `Array.isArray()` to check if a variable is an array:

```javascript
const fruits = ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruits)); // true
```

### Converting Arrays to Strings

- `toString()` converts the array to a comma-separated string:

  ```javascript
  const fruits = ["Banana", "Orange", "Apple"];
  console.log(fruits.toString()); // "Banana,Orange,Apple"
  ```

- `join(separator)` is similar to `toString()`, but allows specifying a custom separator:
  ```javascript
  console.log(fruits.join(" * ")); // "Banana * Orange * Apple"
  ```

## Methods

### 1. Splicing and Slicing Arrays

- `slice(start, end)`: Extracts a portion of an array into a new array. Does not modify the original array.

  ```javascript
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let newFruits = fruits.slice(1, 3);
  console.log(newFruits); // ["Orange", "Apple"]
  ```

- `splice(start, deleteCount, item1, item2, ...)`: Adds/removes elements from an array, modifying the original array.
  ```javascript
  fruits.splice(2, 1, "Lemon", "Kiwi");
  console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
  ```

### 2. Sorting Arrays

- `sort()`: Sorts elements alphabetically or numerically. By default, it sorts elements as strings.

  ```javascript
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(); // [1, 10, 100, 25, 40, 5]
  ```

- Numerical Sorting: Sort numbers correctly by providing a compare function.

  ```javascript
  points.sort((a, b) => a - b); // [1, 5, 10, 25, 40, 100]
  points.sort((a, b) => b - a); // [100, 40, 25, 10, 5, 1]
  ```

- `reverse()`: Reverses the order of elements in an array.
  ```javascript
  points.reverse(); // [100, 40, 25, 10, 5, 1]
  ```

### 3. Array Iteration

#### 1. `forEach()`

- Executes a function once for each element in the array.
  ```javascript
  fruits.forEach((fruit) => console.log(fruit));
  ```

#### 2. `map()`

- Creates a new array by applying a function to each element. Unlike `forEach()`, `map()` returns a new array and does not modify the original array.

  ```javascript
  let doubled = points.map((point) => point * 2);
  console.log(doubled); // [2, 10, 50, 200, 80, 20]
  ```

- Difference between `map()` and `forEach()`:
  - `map()` returns a new array, and you can chain other methods to it.
  - `forEach()` does not return anything and cannot be chained.

### 4. Filtering Arrays

- `filter()` creates a new array with all elements that pass a test.

  ```javascript
  let people = [
    { name: "Aaron", age: 65 },
    { name: "Beth", age: 2 },
    { name: "Cara", age: 13 },
    { name: "Daniel", age: 3 },
  ];

  let toddlers = people.filter((person) => person.age <= 3);
  console.log(toddlers); // [{ name: "Beth", age: 2 }, { name: "Daniel", age: 3 }]
  ```

### 6. Reducing Arrays

- `reduce()` runs a function on each element of the array to reduce it to a single value (accumulative operation).
  ```javascript
  let sum = points.reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(sum); // 180
  ```

### 7. Other Useful Methods

1. `every()`: Tests if all elements in an array pass a given test.

   ```javascript
   let allAdults = people.every((person) => person.age >= 18);
   console.log(allAdults); // false
   ```

2. `some()`: Tests if at least one element in an array passes a given test.

   ```javascript
   let someAdults = people.some((person) => person.age >= 18);
   console.log(someAdults); // true
   ```

3. `indexOf()`: Searches for an element and returns its index. Returns `-1` if the element is not found.

   ```javascript
   console.log(points.indexOf(25)); // 4
   ```

4. `find()`: Returns the value of the first element that satisfies a condition.

   ```javascript
   let adult = people.find((person) => person.age >= 18);
   console.log(adult); // { name: "Aaron", age: 65 }
   ```

5. `findIndex()`: Returns the index of the first element that satisfies a condition.
   ```javascript
   let index = people.findIndex((person) => person.age >= 18);
   console.log(index); // 0
   ```

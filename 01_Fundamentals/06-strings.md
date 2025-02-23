# JavaScript Strings

Strings in JavaScript are primitive values and are **immutable**. This means that when you modify a string, JavaScript creates a **new** string and the original string remains unchanged.

### String Methods

#### Extracting String Parts

There are three main methods for extracting a part of a string:

1. **`slice(start, end)`**

   - Extracts a portion of a string and returns it as a new string.
   - If the `start` parameter is negative, it counts from the end of the string.
   - If `end` is omitted, it extracts to the end of the string.

   ```javascript
   let str = "Hello, World!";
   console.log(str.slice(0, 5)); // "Hello"
   console.log(str.slice(-6)); // "World!"
   ```

2. **`substring(start, end)`**

   - Similar to `slice()`, but it **does not accept negative indexes**.
   - It returns the part of the string between `start` and `end`, excluding the character at `end`.

   ```javascript
   let str = "Hello, World!";
   console.log(str.substring(0, 5)); // "Hello"
   console.log(str.substring(7, 12)); // "World"
   ```

3. **`substr(start, length)`**

   - Similar to `slice()`, but the second parameter specifies the **length** of the substring instead of the `end` index.
   - It extracts a portion of the string starting at `start` and up to the specified length.

   ```javascript
   let str = "Hello, World!";
   console.log(str.substr(0, 5)); // "Hello"
   console.log(str.substr(7, 5)); // "World"
   ```

#### Converting a String to an Array

You can convert a string into an array using the `split()` method. This method splits the string into an array of substrings based on a specified delimiter.

```javascript
let text = "a,b,c,d,e,f";
let result = text.split(","); // ["a", "b", "c", "d", "e", "f"]
console.log(result);
```

### String Search Methods

JavaScript offers several methods to search within a string. Each method has its specific behavior:

1. **`indexOf(searchValue, startPosition)`**

   - Returns the **index** of the first occurrence of a specified value in the string.
   - If the value is not found, it returns `-1`.
   - You can specify a starting position for the search using the optional second parameter.

   ```javascript
   let str = "Hello, World!";
   console.log(str.indexOf("World")); // 7
   console.log(str.indexOf("JavaScript")); // -1
   ```

2. **`lastIndexOf(searchValue, startPosition)`**

   - Similar to `indexOf()`, but it returns the **last occurrence** of a specified value in the string.
   - If the value is not found, it returns `-1`.
   - The optional second parameter defines where to start the search.

   ```javascript
   let str = "Hello, World! Hello!";
   console.log(str.lastIndexOf("Hello")); // 14
   console.log(str.lastIndexOf("World")); // 7
   ```

3. **`search(searchValue)`**

   - Searches the string for a specified value and returns the **position** of the match.
   - Unlike `indexOf()`, it does not accept a second starting position argument.
   - The `search()` method can work with **regular expressions**.

   ```javascript
   let str = "Hello, World!";
   console.log(str.search("World")); // 7
   console.log(str.search(/world/i)); // 7 (case insensitive search)
   ```

4. **`includes(searchValue, startPosition)`**

   - Returns `true` if the string contains the specified `searchValue`, and `false` otherwise.
   - You can provide an optional starting position for the search.

   ```javascript
   let str = "Hello, World!";
   console.log(str.includes("World")); // true
   console.log(str.includes("JavaScript")); // false
   ```

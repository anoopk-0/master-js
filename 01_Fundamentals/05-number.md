# JavaScript Number

JavaScript uses the `number` type to represent both integer and floating-point values. Below is an overview of the key concepts related to numbers in JavaScript, including how to work with octal and hexadecimal literals, perform arithmetic operations with floating-point values, and convert variables to numbers.

### Integer Numbers

#### Formats for Integer Numbers

In JavaScript, integers can be represented in the following formats:

1. **Octal (Base 8)**
2. **Hexadecimal (Base 16)**

### 1. Octal Numbers

Octal numbers are represented by a `0` followed by a sequence of digits ranging from `0` to `7`.

- **Strict Mode:** Octal literals are allowed in non-strict mode, but if used in strict mode, JavaScript will throw an error.

- **Non-Octal Values:** If a number contains digits that are outside the range `0-7`, JavaScript ignores the `0` and treats the number as a decimal.

```javascript
let num = 071;
console.log(num); // 57
```

#### ES6 Update: New Octal Literal Syntax

To avoid ambiguity, ES6 introduced a new syntax for octal literals. They should start with `0o` (not just `0`). The valid digits range from `0` to `7`.

```javascript
let num = 0o71;
console.log(num); // 57

let num = 0o80;
console.log(num); // SyntaxError: Invalid or unexpected token
```

### 2. Big Numbers and E-Notation

In JavaScript, for large numbers, you can use **E-notation** to represent numbers in scientific form. E-notation indicates a number should be multiplied by `10` raised to a certain power.

```javascript
let amount = 3.14e7; // 3.14 * 10^7 = 31400000
```

#### Key Points:

- **Integer Accuracy:** JavaScript integers (numbers without decimal points or exponent notation) are accurate up to 15 digits.

- **Floating-Point Accuracy:** Floating-point numbers (numbers with decimals or exponent notation) are accurate up to 17 decimal places.

- **Floating-Point Precision Issues:** When performing arithmetic with floating-point numbers, you might encounter precision issues, like:

```javascript
let amount = 0.2 + 0.1;
console.log(amount); // 0.30000000000000004
```

To fix this, you can multiply and divide:

```javascript
let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
```

## String Concatenation and NaN

### String Concatenation:

JavaScript uses the `+` operator for both addition and string concatenation. This can sometimes cause unexpected results if you're trying to add numbers, as JavaScript will treat them as strings if either operand is a string.

```javascript
let x1 = 10;
let y1 = 20;
let z1 = "The result is: " + x1 + y1;
console.log(z1); // "The result is: 1020" (not 30)
```

### Checking for NaN (Not a Number):

Use the `isNaN()` function to determine whether a value is NaN.

```javascript
let x2 = NaN;
let y2 = "5";
let z2 = x2 + y2;
console.log(z2); // "NaN5"
```

## Number Formatting Methods

#### `toFixed()`

The `toFixed()` method formats a number to a specified number of decimal places.

```javascript
let total = 9.656;
console.log(total.toFixed(0)); // "10"
console.log(total.toFixed(2)); // "9.66"
```

#### `toPrecision()`

The `toPrecision()` method formats a number to a specified length (total number of digits).

```javascript
let totalNum = 9.656;
console.log(totalNum.toPrecision()); // "9.656"
console.log(totalNum.toPrecision(2)); // "9.7"
```

### Converting Variables to Numbers

JavaScript provides three main methods to convert variables to numbers:

1. **`Number()`** - Converts its argument to a number.

2. **`parseFloat()`** - Parses its argument and returns a floating-point number.

3. **`parseInt()`** - Parses its argument and returns an integer.

### Conversion Rules:

| Value       | Becomes                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `undefined` | `NaN`                                                                                                                                                                                |
| `null`      | `0`                                                                                                                                                                                  |
| `true`      | `1`                                                                                                                                                                                  |
| `false`     | `0`                                                                                                                                                                                  |
| String      | Whitespace is removed from the start and end. If the remaining string is empty, the result is `0`. Otherwise, the number is "read" from the string. Invalid numbers result in `NaN`. |

#### Examples:

```javascript
Number(undefined); // NaN
Number(null); // 0
Number(true); // 1
Number("  123  "); // 123
Number("abc"); // NaN
```

```javascript
parseFloat("123.45abc"); // 123.45
parseInt("123abc"); // 123
parseInt("abc123"); // NaN
```

# JavaScript Operators

#### Addition (`+`)

- Function: Adds two values together.
- If either operand is a string, JavaScript will perform string concatenation.

  - If both operands are strings, it concatenates them.
  - If one operand is a string, JavaScript implicitly converts the numeric value to a string and then concatenates.

  ```javascript
  let x = "10",
    y = "20";
  let result = x + y; // "1020" (String concatenation)
  ```

#### Subtraction (`-`)

- Function: Subtracts the second operand from the first.
- If a non-numeric value is involved (like a string, boolean, or `null`), JavaScript converts the operand to a number before performing the subtraction.

  ```javascript
  let resultSub = "10" - 5; // 5 (Implicit conversion)
  ```

#### Multiplication (`*`)

- Function: Multiplies two numbers.
- If one operand is not a number, JavaScript attempts to convert it to a number before performing multiplication.

  ```javascript
  let resultMulti = "5" * 2; // 10 (Implicit conversion)
  ```

#### Division (`/`)

- Function: Divides the first operand by the second.
- Similar to multiplication, non-numeric values are converted into numbers.

  ```javascript
  let resultDiv = "20" / 2; // 10
  ```

#### Modulus (`%`)

- Function: Returns the remainder of a division operation.

  ```javascript
  let resultMod = 10 % 3; // 1
  ```

## Unary Operators

#### Unary Plus (`+`)

- Function: Converts a value to a number (if it isn't already).

  ```javascript
  let s = "10";
  console.log(+s); // 10 (String converted to a number)

  let person = {
    toString: function () {
      return "25";
    },
  };
  console.log(+person); // 25 (String conversion from `toString()` method)
  ```

#### Increment (`++`) and Decrement (`--`) Operators

- Prefix: Changes the value before using it in the expression.
- Postfix: Changes the value after the expression is evaluated.

  ```javascript
  let age = 25;
  ++age; // Prefix increment, now age is 26

  let weight = 90;
  let newWeight = weight++ + 5; // Postfix increment, newWeight is 95, weight becomes 91
  ```

## Comparison Operators

#### Equality (`==`) vs Strict Equality (`===`)

- `==`: Compares values, performing type conversion if necessary.
- `===`: Compares both value and type without type conversion.

  ```javascript
  console.log(null == undefined); // true
  console.log("10" == 10); // true (Type conversion happens)
  console.log("10" === 10); // false (No type conversion)
  ```

- `NaN` is never equal to anything, even itself.
  ```javascript
  console.log(NaN == NaN); // false
  ```

## Logical Operators

#### NOT (`!`)

- Function: Negates a boolean value.

  ```javascript
  let counter = 10;
  console.log(!!counter); // true (Double negation)
  ```

#### AND (`&&`)

- Function: Returns `true` if both operands are truthy.
- Short-circuiting: If the first operand is falsy, the second is not evaluated.

  ```javascript
  let result = value1 && value2 && value3; // Stops if a falsy value is found
  ```

#### OR (`||`)

- Function: Returns `true` if at least one operand is truthy.
- Short-circuiting: If the first operand is truthy, the second is not evaluated.

  ```javascript
  let result = value1 || value2 || value3; // Stops if a truthy value is found
  ```

#### Double Negation (`!!`)

- Function: Converts any value to its corresponding boolean value.

  ```javascript
  let counter = 10;
  console.log(!!counter); // true (truthy value)

  let value = "";
  console.log(!!value); // false (falsy value)
  ```

#### Nullish Coalescing (`??`)

- Function: Returns the right-hand operand if the left-hand operand is `null` or `undefined`. Does not consider other falsy values like `0` or `""`.

  ```javascript
  const name = null ?? "John"; // 'John'
  let count = 0;
  let result = count ?? 1; // 0 (because count is not null or undefined)
  ```

#### Logical Assignment Operators

- OR Assignment (`||=`): `x ||= y` is the same as `x || (x = y)`.
- AND Assignment (`&&=`): `x &&= y` is the same as `x && (x = y)`.
- Nullish Coalescing Assignment (`??=`): `x ??= y` is the same as `x ?? (x = y)`.

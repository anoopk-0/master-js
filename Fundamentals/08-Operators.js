/**
 * TODO: Arithmetic Operators
 *
 * Addition operator (+)
 *      -The addition operator returns the sum of two values.
 *
 *      -If either value is a string, the addition operator uses the following rules:
            If both values are strings, it concatenates the second string to the first one.
            If one value is a string, it implicitly converts the numeric value into a string and conatenate two strings.
 */

let x = "10",
  y = "20";
let resultAdd = x + y;

console.log(result); // 1020

/**
 * Subtraction operator (-)
 *
 *If a value is a string, a boolean, null, or undefined, the JavaScript engine will:

            First, convert the into a number using the Number() function.
            Second, perform the subtraction.

 * 
 * Multiplication operator (*)
 * 
 * JavaScript uses the asterisk (*) to represent the multiplication operator. The multiplication operator multiplies two numbers and returns a single value.
 * 
 * If either value is not a number, the JavaScript engine implicitly converts it into a number using the Number() function and performs the multiplication
 */

let resultMulti = "5" * 2; //10

/**
 * Divide operator (/)
 *
 * If either value is not a number, the JavaScript engine converts it into a number for division
 *
 *    ***The modulus operator (%) returns the division remainder.
 */
let resultDiv = "20" / 2;
console.log(result); // 10;

/**
 * TODO: Unary Operators Explained
 *
 * Unary plus (+)
 *
 * When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the Number() function
 */

let s = "10";
console.log(+s); // 10

let person = {
  name: "John",
  toString: function () {
    return "25";
  },
};

console.log(+person);

/**
 * Increment / Decrement operators
 *
 * Both increment and decrement operators have two versions: prefix and postfix.And you place the prefix and postfix versions of the increment or decrement operators before and after the variable to which they apply.
 *
 *      The prefix increment operator adds one to a value. The value is changed before the statement is evaluted.
 *      The postfix increment operator adds one to a value. The value is changed after the statement is evaluted.
 */

let age = 25;
++age;

console.log(age); // 26

//It’s equivalent to the following

age = age + 1;
console.log(age); // 26

//post inc
let weight = 90;
let newWeight = weight++ + 5;

console.log(newWeight); // 95
console.log(weight); // 91

/**
 * TODO: Comparison Operators
 * In JavaScript, null equals undefined. It means that the following expression returns true.
 */

console.log(null == undefined); // true
console.log(NaN == NaN); // false

//In the first comparison, since we use the equality operator, JavaScript converts the string into the number and performs the comparison. However, in the second comparison, we use the strict equal operator ( ===), JavaScript doesn’t convert the string before comparison, therefore the result is false.
console.log("10" == 10); // true
console.log("10" === 10); // false

/**
 * TODO: Logical Operators
 * 
 * The NOT operator (!) negates a boolean value. The (!!) converts a value into its real boolean value.
The AND operator (&&) is applied to two Boolean values and returns true if both values are true.
The OR operator (||) is applied to two Boolean values and returns true if one of the operands is true.
Both && and || operator are short-circuited. They cab be also applied to non-Boolean values.
The logical operator precedence from the highest to the lowest is !, && and ||.

 *
 *
 *  Double-negation (!!)  The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value. The result is the same as using the Boolean() function. For example:
 *
 */
let counter = 10;
console.log(!!counter); // true

/**
 *
 * A Chain of && operators
 */

let result = value1 && value2 && value3;

//For each value, converts it to a boolean. If the result is false, stops and returns the original value

//  If a value can be converted to true, it is so-called a truthy value. If a value can be converted to false, it is a so-called falsy value.

/**
 * TODO: Logical Assignment Operators
 * 
    Logical OR assignment operator (||=)    x ||= y is same as x || (x = y)
    Logical AND assignment operator (&&=)
    Nullish coalesing assignment operator (??=) x ??= y same as x ?? (x = y);
 */

/*
 TODO: Nullish Coalescing Operator
 
    the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:
       
    result =  a ?? b
    is same as 
    result = (a !== null && a !== undefined) ? a : b;
  
  The nullish coalescing operator (??) is a logical operator that accepts two values and returns the second value if the first one is null or undefined. The nullish coalescing operator is short-circuited and cannot directly combine with the logical AND or OR operator.

const name = null ?? "John";
console.log(name); // 'John'

let count = 0;
let result11 = count || 1; //0

Code language: JavaScript (javascript)
The result is 1, not 0, which you may not expect.

The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either null or undefined.
*/

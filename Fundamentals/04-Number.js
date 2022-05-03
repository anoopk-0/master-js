/*
JavaScript uses the number type to represent both integers and floating-point values.

 //TOPIC: Integer numbers

Integers can be represented in the following formats:
    Octal (base 8)
    Hexadecimal (based 16)

When you use the octal and hexadecimal numbers in arithmetic operations, JavaScript treats them as decimal numbers.

 //TOPIC: Octal numbers
An octal literal number starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7).  

    **Note you can use the octal literals in non-strict mode. If you use them in strict mode, JavaScript will throw an error.

example:
let num = 071;
console.log(num); //57

If an octal number contains a number that is not in the range from 0 to 7, the JavaScript engine ignores the 0 and treats the number as a decimal. For example:

let num = 080;
console.log(num); //80

 //IMP: This implicit behavior might cause issues. Therefore, ES6 introduced a new octal literal that starts with the 0o followed by a sequence of octal digits (from 0 to 7). For example:

let num = 0o71;
console.log(num);//57

let num = 0o80;
console.log(num); //SyntaxError: Invalid or unexpected token

## Big Number

When you have a very big number, you can use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power.
let amount = 3.14e7;
The notation 3.14e7 means that take 3.14 and multiply it by 10^7.

 //IMP: Integers (numbers without a period or exponent notation) are accurate up to 15 digits. and Floating-point numbers are accurate up to 17 decimal places. When you perform arithmetic operations on floating-point numbers, you often get the approximate result.

*/

let amount = 0.2 + 0.1;
console.log(amount); //0.30000000000000004

// To solve the problem above, it helps to multiply and divide:
let x = (0.2 * 10 + 0.1 * 10) / 10; //0.3

//IMP: JavaScript uses the + operator to concatenate the strings. The JavaScript interpreter works from left to right.
let x1 = 10;
let y1 = 20;
let z1 = "The result is: " + x1 + y1; //The result is: 1020 and not 30

//IMP: use the global JavaScript function isNaN() to find out if a value is a not a number, NaN is a number: typeof NaN returns number

let x2 = NaN;
let y2 = "5";
let z2 = x + y; //NaN5

//IMP: toFixed(): toFixed(2) is perfect for working with money.
let total = 9.656;
total.toFixed(0); // 10
total.toFixed(2); //9.66

//IMP: toPrecision(): returns a string, with a number written with a specified length:

let totalNum = 9.656;
totalNum.toPrecision(); //9.656;
totalNum.toPrecision(2); //9.7

/*
## Converting Variables to Numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

        Number()	Returns a number, converted from its argument.
        parseFloat()	Parses its argument and returns a floating point number
        parseInt()	Parses its argument and returns an integer [parses a string and returns a whole number. Spaces are allowed. Only the first number is returned]

        **If the number cannot be converted, NaN (Not a Number) is returned. 
 */

/**
## Numeric conversion rules:

    Value	Becomes…
    undefined->	NaN
    null->	0
    true and false->	1 and 0
    string->	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
 */

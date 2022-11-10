/*
TOPIC:dataType:

There are eight basic data types in JavaScript. They are:
_______________________________________________________________________________________________________
    String     | represents textual data	                        | 'hello', "hello world!" etc
    Number	   | an integer or a floating-point number	            | 3, 3.234, 3e-2 etc.
    BigInt	   | an integer with arbitrary precision	            | 900719925124740999n , 1n etc.
    Boolean	   | Any of two values: true or false	                | true and false
    undefined  | a data type whose variable is not initialized	    | let a;
    null	   | denotes a null value	                            | let a = null;
    Symbol	   | data type whose instances are unique and immutable	| let value = Symbol('hello');
    Object	   | key-value pairs of collection of data	            | let student = { };
--------------------------------------------------------------------------------------------------------
   
Here, all data types except Object are primitive data types, whereas Object is non-primitive.

Note: The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.


## To get the current type of the value that the variable stores, you use the typeof operator


TOPIC:NAN

## NaN stands for Not a Number.

The NaN has two special characteristics:

    Any operation with NaN returns NaN.
    The NaN does not equal any value, including itself.

    Mathematical operations are safe
        Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
        The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
*/

console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

//IMP:JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string

/*

TOPIC: JavaScript Primitive vs. Reference Values 

(https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)

JavaScript has two different types of values:

        -Primitive values
        -Reference values
Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.

**Stack and heap memory

When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

Static data is the data whose size is fixed at compile time. Static data includes:

    Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
    Reference values that refer to objects.

Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.

## Copying values

When you assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value and assigns it to the variable

When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect the other.

## The “null” value

let age = null;

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.


## The “undefined” value

The special value undefined also stands apart. It makes a type of its own, just like null.
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined:

let age;

console.log(age); // shows "undefined"
*/

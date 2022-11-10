/*
 An array is a special variable, which can hold more than one value. In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.

## Creating an Array
1. Using an array literal is the easiest way to create a JavaScript Array.
    `const num = [];`

2. Using constructor
    `const cars = new Array("Saab", "Volvo", "BMW");`

A Common Error
    const points = [10]; => [10]
    is not the same as:
    const points = new Array(10); => (10) [empty × 10]

    **Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.(Arrays are a special kind of objects, with numbered indexes.)

## How to Recognize an Array
1. Array.isArray();

*/

const fruits = ["Banana", "Orange", "Apple"];

typeof fruits; //object

Array.isArray(fruits); // true

/*
 //TOPIC: Converting Arrays to Strings

The JavaScript method toString() converts an array to a string of (comma separated) array values.The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator.
*/

document.getElementById("demo").innerHTML = fruits.join(" * ");

/*
 //TOPIC: Splicing and Slicing Arrays
The slice() method slices out a piece of an array into a new array.
        - The slice() method creates a new array.
        - The slice() method does not remove any elements from the source array.

The splice() method can be used to add and delete items.

        - The first parameter  defines the position where new elements should be added (spliced in).
        - The second parameter defines how many elements should be removed.
        - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
        - The splice() method returns an array with the deleted items
*/

fruits.splice(0, 1);

/*
//TOPIC: Sorting Arrays

sort() method sorts an array alphabetically.
reverse() method reverses the elements in an array.

**Numeric Sort
{By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".}
*/

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

//to sort an array descending:
points.sort(function (a, b) {
  return b - a;
});

//Main sorting func
[].sort(function (a, b) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

/*
//TOPIC: Array Iteration

1.The forEach() method calls a function (a callback function) once for each array element.

2. map func

    The map() method creates a new array by performing a function on each array element.
    The map() method does not execute the function for array elements without values.
    The map() method does not change the original array.


map vs forEach
The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything. 

One of the main differences between forEach() and map() methods is their ability to chain other methods. map() is chainable but forEach isn't.

        **the choice between map() and forEach() will depend on your use case. If we plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.But, if we won't need the returned array, don't use map() - instead use forEach() or even a for loop.
*/

//TOPIC: Filter

//map creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce , on the other hand, takes all of the elements in an array and reduces them into a single value.

let people = [
  { name: "aaron", age: 65 },
  { name: "beth", age: 2 },
  { name: "cara", age: 13 },
  { name: "daniel", age: 3 },
  { name: "ella", age: 25 },
  { name: "fin", age: 1 },
  { name: "george", age: 43 },
];

let toddlers = people.filter((person) => person.age <= 3);

//TOPIC: reduce()

//The reduce() method runs a function on each array element to produce (reduce it to) a single value. Reducing an array meaning performing a concrete accumulative operation on its items to calculate a result value.

const value = array.reduce(callback, initialValue);

/*
The every() method check if all array values pass a test.
The some() method check if some array values pass a test.
The indexOf() method searches an array for an element value and returns its position.
        **Array.indexOf() returns -1 if the item is not found.

The find() method returns the value of the first array element that passes a test function.
The findIndex() method returns the index of the first array element that passes a test function.
 */

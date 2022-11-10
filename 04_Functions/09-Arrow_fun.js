/*
TOPIC: Arrow functions have no “this”

arrow functions do not have this. If this is accessed, it is taken from the outside.

1) An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.

2) Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.
*/

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};

group.showList();

//If we used a “regular” function, there would be an error:

let _group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};

_group.showList();

/*
README:
The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made.

That doesn’t affect arrow functions, because they just don’t have this.

Arrow functions can’t run with new
Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new.

IMP: Arrow functions VS bind
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

    1 .bind(this) creates a “bound version” of the function.
    2 The arrow => doesn’t create any binding. The function simply doesn’t have this. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.

Arrows have no “arguments”.

*/

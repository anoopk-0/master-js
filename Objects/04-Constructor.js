/*
TOPIC: Constructor function
Constructor functions technically are regular functions. There are two conventions though:

       1. They are named with capital letter first.
       2. They should be executed only with "new" operator.

When a function is executed with new, it does the following steps:

        -A new empty object is created and assigned to this.
        -The function body executes. Usually it modifies this, adds new properties to it.
        -The value of this is returned.

    function User(name) {
         this = {};  (implicitly) --- 1

        //add properties to this --- 2
        this.name = name;
        this.isAdmin = false;

        return this;  (implicitly) ----3
    }
*/

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const person1 = new User("anoop");

/*
Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

IMP:That’s the main purpose of constructors – to implement reusable object creation code. 

README:
technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
*/

/*
TOPIC: Return from constructors

Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

    If return is called with an object, then the object is returned instead of this.
    If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.
*/

function BigUser() {
  this.name = "John";
  return { name: "Godzilla" }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla, got that object

function SmallUser() {
  this.name = "John";
  return; // <-- returns this
}

alert(new SmallUser().name); // John

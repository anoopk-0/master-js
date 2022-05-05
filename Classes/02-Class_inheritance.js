/*
Class inheritance is a way for one class to extend another class.
*/

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

/**
 * IMP:Any expression is allowed after extends
 */
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello

/**
TOPIC: Overriding a method

class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}


Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide "super" keyword for that.

      1.  super.method(...) to call a parent method.
      2.  super(...) to call a parent constructor (inside our constructor only).
 */

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

//Arrow functions have no super

/**
TOPIC: Overriding constructor

Until now, Rabbit did not have its own constructor.

According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:

class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

IMP: Constructors in inheriting classes must call super(...), and (!) do it before using this.
 */

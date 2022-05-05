/*
Private and protected properties and methods:

In object-oriented programming, properties and methods are split into two groups:

Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
External interface – methods and properties, accessible also from outside the class.

In JavaScript, there are two types of object fields (properties and methods):

Public: accessible from anywhere. They comprise the external interface. 
Private: accessible only from inside the class. These are for the internal interface.
*/

class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    alert(`Created a coffee-machine, power: ${power}`);
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water: Right now the properties waterAmount and power are public. We can easily get/set them from the outside to any value.
coffeeMachine.waterAmount = 200;

//Protected properties are usually prefixed with an underscore _.That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

/*
TOPIC: Read-only “power”
 */
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)

/*
TOPIC: Private “#waterLimit”
*/

/*
README:
In terms of OOP, delimiting of the internal interface from the external one is called "encapsulation".

It gives the following benefits:

Protection for users, so that they don’t shoot themselves in the foot
Imagine, there’s a team of developers using a coffee machine. It was made by the “Best CoffeeMachine” company, and works fine, but a protective cover was removed. So the internal interface is exposed.

All developers are civilized – they use the coffee machine as intended. But one of them, John, decided that he’s the smartest one, and made some tweaks in the coffee machine internals. So the coffee machine failed two days later.

That’s surely not John’s fault, but rather the person who removed the protective cover and let John do his manipulations.

The same in programming. If a user of a class will change things not intended to be changed from the outside – the consequences are unpredictable.

IMP:Supportable
The situation in programming is more complex than with a real-life coffee machine, because we don’t just buy it once. The code constantly undergoes development and improvement.

If we strictly delimit the internal interface, then the developer of the class can freely change its internal properties and methods, even without informing the users.

If you’re a developer of such class, it’s great to know that private methods can be safely renamed, their parameters can be changed, and even removed, because no external code depends on them.

For users, when a new version comes out, it may be a total overhaul internally, but still simple to upgrade if the external interface is the same.

Hiding complexity
People adore using things that are simple. At least from outside. What’s inside is a different thing.

It’s always convenient when implementation details are hidden, and a simple, well-documented external interface is available.

To hide an internal interface we use either protected or private properties:
    Protected fields start with _. That’s a well-known convention, not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.

    Private fields start with #. JavaScript makes sure we can only access those from inside the class.
    Right now, private fields are not well-supported among browsers, but can be polyfilled.
*/

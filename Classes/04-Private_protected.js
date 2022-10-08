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
  waterAmount = 0;

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
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

console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)

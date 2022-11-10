/**
Composition is about creating small functions and creating bigger and more complete functions with them. Think of a function as a brick, composition is how you would make those bricks work together to build a wall or a house

Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype.

We can use mixins as a way to augment a class by adding multiple behaviors, like event-handling as we have seen above.

*/
const canEat = {
  eat: function (hunger) {
    this.hunger = hunger;
    console.log("eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking...");
  },
};

function Person() {
  canEat.eat.call(this, 100);
}

//Can compose this method..
Object.assign(Person.prototype, canEat, canWalk);

const p1 = new Person();

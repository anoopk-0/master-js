//TODO: Base Object Shape
function Shape(name) {
  this.name = name;
}

Shape.prototype.draw = function () {
  return console.log(`drawing a ${this.name} in constructor function...`);
};

Shape.prototype.move = function () {
  return `moving a ${this.name} in constructor function...`;
};

//TODO: Derived Object Circle
function Circle(radius, name) {
  //instance member
  Shape.call(this, name);
  this.radius = radius;
}

//In js we a method to create a object with a given prototype: Object.create
Circle.prototype = Object.create(Shape.prototype);
//resetting the constructor
Circle.prototype.constructor = Circle;

//TODO: Derived Object Square
function Square(area, name) {
  //instance member
  Shape.call(this, name);
  this.area = area;
}
//In js we a method to create a object with a given prototype: Object.create
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const circle = new Circle(10, "circle");
const square = new Square(100, "square");

//TODO: Method Overriding:
//IMP:Don't modify method you don't own
Square.prototype.draw = function () {
  //calling the base method
  Shape.prototype.draw.call(this);
  return `overriding the draw method of the base object... `;
};

//TODO: Mixin:
const canEat = {
  eat() {
    this.hunger--;
    console.log(`eating... ${this.hunger}`);
  },
};

const canWalk = {
  walk() {
    console.log(`walking.... `);
  },
};

const canSwim = {
  swim() {
    console.log(`swimming.... `);
  },
};

//const person = Object.assign({}, canEat, canWalk);

function Person(name) {
  this.hunger = 10;
  this.name = name;
}
Object.assign(Person.prototype, canEat, canWalk);
const p1 = new Person("anoop");

function Fish(color) {
  this.hunger = 10;
  this.color = color;
}
mixin(Fish, canEat, canSwim);

const f1 = new Fish("gold");

//TODO: Mixin func

//we can make a function for (Object.assign(Fish.prototype, canEat, canSwim);) logic called mixin
function mixin(parent, ...properties) {
  return Object.assign(parent["prototype"], ...properties);
}

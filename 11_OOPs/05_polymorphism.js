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
  Shape.call(this, name);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//overriding draw in circle
Circle.prototype.draw = function () {
  return `in ${this.name}, we are overriding the base shape object`;
};

//TODO: Derived Object Square
function Square(area, name) {
  Shape.call(this, name);
  this.area = area;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

//overriding draw in circle
Square.prototype.draw = function () {
  return `in ${this.name}, we are overriding the base shape object`;
};

const shapes = [
  new Shape("s"),
  new Circle(10, "circle"),
  new Square(100, "square"),
];

for (const key of shapes) {
  console.log(key.draw());
}

/**
 * Overriding the draw method, make it useful according to need, which help to achieve polymorphism...
 * draw method is being used in many from.

for (const s of shapes) {
  if (s.type === 'circle')
      circleDraw();
  else if (s.type === 'square')
      squareDrwa();
  else
      shapeDraw()
}

help to avoid, if and else and switch case statement..

*/

/*
creating own proptotypical interitance
*/

//base
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

//child
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

//IMP:The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Circle.prototype = Object.create(Shape.prototype);

//resetting the constructor

Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

//TOPIC: Method Overriding
//shape proto is change to Cirlce proto
Circle.prototype.duplicate = function () {
  console.log("duplicate");
};

/*
TOPIC: polymorphism
 

duplicate has lot of form... which means polymorphism

*/

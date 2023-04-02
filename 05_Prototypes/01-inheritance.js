/* 

TOPIC: [[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

                        --- [shape]{base/super/parent}------  
                       |                                    | [inheritance "IS A " relationship]
                       |                                    | 
                       [circle]                             [square] {child/derived}
                       

TOPIC: Prototypal Inheritance

let shape = {}; 

let circle extends shape = {}, to get the property of shape. [so shape is the prototype of circle.]

IMP: PRototype is parent to another object.

IMP: every Object as a constructor property that was used to construct that object

IMP: Object is the base/root of everything in js ; [[Prototype]]: Object


Object.getPrototypeOf() Method

!Prototypal inheritance: while accessing a property or a method on obj. js engine walk up the prototype chain. till it reach the root object or find the target obj or method.
Every object has as a prototype or a parent except the root object.
*/

let x = {};

Object.getPrototypeOf(x);
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`draw..`);
  };
}

//Prototype/parents = Circle
let c1 = new Circle(10);

/*
TOPIC: prototype vs instance member

prototype inheritance help to remove duplication of method/property by keeping at a single place. in the parents.

it help to have single instance , in the memory.
*/

function _Circle(radius) {
  //instance member
  this.radius = radius;
  this.draw = function () {
    console.log(`draw..`);
  };
}

//prototypical remember
_Circle.prototype.move = function () {
  console.log("move..");
};

//Only give the instance(own property) member
Object.keys(_Circle); // ['radius', 'draw']

//for in give the instance member
for (const key in object) {
  //radius, draw, move
}

//IMP: to check for own property
c1.hasOwnProperty("draw"); //instance : true
c1.hasOwnProperty("move"); //not own or instance : false

//IMP: we should not modify the built-in Object in js, overriding the built in method

Object.prototype.toString = () => console.log("don't change");

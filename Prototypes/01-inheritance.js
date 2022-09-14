/* 
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.
*/

/*
TOPIC: [[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

[prototype object]
    ^
    |  [Prototype]
    |
[object]


When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

NOTE:__proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. 

The value of “this”

The answer is simple: this is not affected by prototypes at all.

No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.



                        --- [shape]{base/super/parent}------  
                       |                                    | [inheritance "IS A " relationship]
                       |                                    | 
                       [circle]                             [square] {child/derived}
                       
*/

/*
TOPIC: Prototypal Inheritance

let shape = {}; 

let circle extends shape = {}, to get the property of shape. [so shape is the prototype of circle.]

IMP: PRototype is parent to another object.

IMP: every Object as a constructor property that was used to construct that object

IMP: Object is the base/root of everything in js ; [[Prototype]]: Object


Object.getPrototypeOf() Method

The Object.getPrototypeOf() method of JavaScript returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.


Prototypal inheritance: while accessing a property or a method on obj. js engine walk up the prototype chain. till it reach the root object or find the target obj or method.
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
TOPIC: Constructor  property

to get the property of the obj: Object.getPrototypeOf(x);

Constructor also has a prototype property.

            Constructor.prototype: this will be used as a parents of object, constructed by Circle object.

            c1.__proto__  === Circle.prototype: are reference the same object in the memory that is circle base.
*/

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

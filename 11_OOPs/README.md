# OOPS

Object-oriented Programming, is a programming paradigm(style of programming) centered around object rather than a function. OOPs is not a programming language or a tool.

4 pillar of Object-oriented Programming: - Encapsulation - Inheritance - Abstraction - Polymorphism

_before oops,we had procedural programming which the application was divided into various function. this had lots of inter-dependency. In oops, we combine a related a group of related function and variables into a single unit, which is an Object_

```
    const car = {
        #properties: variable of an object
        model: 12mil/lit,
        color: 'red',
        year: 2020,

        #method: function of an object
        move(),
        stop(),
        start(),
    }

  //TODO: procedural programming
  let baseSalary = 20000;
  let rate = 10;
  let overtime = 20;

  function getWage(baseSalary, overtime, rate){
    return baseSalary + (rate + overtime);
  }

  //TODO: OOP approach
  let employee = {
    baseSalary: 20000,
    rate: 10,
    overtime: 20,

    getWage(){
      return this.baseSalary + (this.rate + this.overtime);
    }
  }

  employee.getWage();

```

# Encapsulation:

encapsulation refers to the bundling of data with the methods that operate on that data.

# Abstraction:

Abstraction is the concept of object-oriented programming that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the users. ... It is one of the most important concepts of OOPs.

- make the interface simpler.
- also reduce the impact of change.

# Inheritance:

inheritance is the mechanism of basing an object or class upon another object or class, retaining similar implementation.
help in reusing the code and remove redundant code.

# Polymorphism

IMP:Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times. By utilizing Polymorphism, we can define multiple forms of a method, and depending upon the runtime scenario, one type of object can have different behavior.

- help to remove along if and else or switch case statement

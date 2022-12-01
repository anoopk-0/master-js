/**
The factory pattern is a creational design pattern that provides a generic interface for creating objects.
*/

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type = 1) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

const createEmployee = new EmployeeFactory();
const employeesList = [];

employeesList.push(
  createEmployee.create("anoop kumar", 1),
  createEmployee.create("ravi", 2)
);

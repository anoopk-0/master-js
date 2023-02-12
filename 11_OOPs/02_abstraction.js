/**
 * Abstraction: to make property and methods private and make the interface of the object simple.
 *
 *  HIDE THE DETAILS AND EXPOSE ONLY THE ESSENTIAL
 */

function Circle(radius) {
  // To make the property and method private: we can create local property and method
  let defaultLocation = { x: 0, y: 1 };
  const computeOptimumLocation = function () {
    console.log(`Location : ${JSON.stringify(defaultLocation)}`);
  };

  this.radius = radius;
  this.draw = function () {
    computeOptimumLocation();
    console.log(`Drawing a circle in constructor function...`);
  };

  //TODO: Getter and Setter: to make then private member
  // if we want to read radius, but not modify it then, setter and getter is the approach
  Object.defineProperty(this, "defaultLocation", {
    // defaultLocation is a read only property
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (typeof value !== "object" || !Object.keys(value).length)
        throw new Error("something went wrong...");

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);

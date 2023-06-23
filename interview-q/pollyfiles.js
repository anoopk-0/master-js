Array.prototype.map = function (callback, thisArg) {
  var array = this;
  var newArray = new Array(array.length);

  for (var i = 0; i < array.length; i++) {
    if (i in array) {
      newArray[i] = callback.call(thisArg, array[i], i, array);
    }
  }

  return newArray;
};

// filter

Array.prototype.filter = function (callback, thisArg) {
  var array = this;
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i in array) {
      var element = array[i];
      if (callback.call(thisArg, element, i, array)) {
        newArray.push(element);
      }
    }
  }

  return newArray;
};

//reduce

Array.prototype.reduce = function (callback, initialValue) {
  var array = this;
  var length = array.length;
  var accumulator = initialValue;
  var startIndex = 0;

  if (typeof accumulator === "undefined") {
    if (length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = array[0];
    startIndex = 1;
  }

  for (var i = startIndex; i < length; i++) {
    if (i in array) {
      accumulator = callback.call(undefined, accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

// find

Array.prototype.find = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  var array = this;
  var length = array.length;

  for (var i = 0; i < length; i++) {
    if (i in array) {
      var element = array[i];
      if (callback.call(thisArg, element, i, array)) {
        return element;
      }
    }
  }

  return undefined;
};

// bind func
function bind(context, ...args) {
  let self = this;
  return function (...innerArgs) {
    return self.apply(context, [...args, ...innerArgs]);
  };
}

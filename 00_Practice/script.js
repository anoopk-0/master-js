//creating polly file for Object.assign(), Map.

function callback(arr) {
  let arr = [];
  for (const i of arr) {
    arr.push(arr[i]);
  }

  return arr;
}

Function.prototype.myMap = function (callback) {
  return callback(this);
};

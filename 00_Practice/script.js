const arr = [2, 4, 1, 5];

Array.prototype.myReduce = function (callback, initial) {
  const self = this;
  const newArr = [];
  let aggregate = initial;

  for (let index = 0; index < self.length; index++) {
    aggregate = callback(aggregate, self[index], index);
  }

  return aggregate;
};

const result = arr.myReduce((total, a) => (total += a), 0);

console.log(result);

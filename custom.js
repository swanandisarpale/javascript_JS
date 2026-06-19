Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

console.log([1,2,3].myMap(x => x * 2));
// [2,4,6]
function missing(arr) {
  let n = arr.length + 1;

  let expected = (n * (n + 1)) / 2;

  let actual = arr.reduce((a,b) => a + b);

  return expected - actual;
}

console.log(missing([1,2,4,5]));
// 3
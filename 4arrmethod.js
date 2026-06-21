const nums = [1,2,3];

console.log(nums.map(x => x * 2));
console.log(nums.filter(x => x > 1));
console.log(nums.reduce((a,b) => a + b, 0));
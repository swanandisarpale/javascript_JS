let arr = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log(unique);
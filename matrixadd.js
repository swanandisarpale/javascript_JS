let a = [
    [1, 2],
    [3, 4]
];

let b = [
    [5, 6],
    [7, 8]
];

let result = [];

for (let i = 0; i < a.length; i++) {
    result[i] = [];

    for (let j = 0; j < a[i].length; j++) {
        result[i][j] = a[i][j] + b[i][j];
    }
}

console.log(result);
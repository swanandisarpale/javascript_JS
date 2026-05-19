let arr = [4, 9, 2, 15, 7];
let largest = arr[0];

for (let num of arr) {
    if (num > largest) {
        largest = num;
    }
}

console.log(largest);
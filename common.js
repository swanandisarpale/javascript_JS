let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

for (let num of arr1) {
    if (arr2.includes(num)) {
        console.log(num);
    }
}
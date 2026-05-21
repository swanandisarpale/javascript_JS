let arr = [1, 2, 2, 3, 1, 4, 2];
let freq = {};

for (let num of arr) {
    if (freq[num]) {
        freq[num]++;
    } else {
        freq[num] = 1;
    }
}

console.log(freq);
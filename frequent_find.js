// Function to find most frequent element
function mostFrequent(arr) {

    let count = {};
    let maxCount = 0;
    let result;

    // Count frequency of each element
    for (let num of arr) {

        count[num] = (count[num] || 0) + 1;

        // Update maximum frequency
        if (count[num] > maxCount) {
            maxCount = count[num];
            result = num;
        }
    }

    return result;
}

// Example
let nums = [1, 2, 2, 3, 3, 3, 4];

console.log(mostFrequent(nums));
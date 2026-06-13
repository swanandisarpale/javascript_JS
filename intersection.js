// Function to find common elements
function intersection(arr1, arr2) {

    let result = [];

    // Check every element of arr1
    for (let item of arr1) {

        // If item exists in arr2
        if (arr2.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

// Example
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

console.log(intersection(arr1, arr2));
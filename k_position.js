// Function to rotate array
function rotateArray(arr, k) {

    // Handle k greater than array length
    k = k % arr.length;

    // Take last k elements and move them to front
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

// Example
let numbers = [1, 2, 3, 4, 5];

console.log(rotateArray(numbers, 2));
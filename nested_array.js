// Function to flatten nested arrays
function flattenArray(arr) {

    // Result array
    let result = [];

    // Loop through each element
    for (let item of arr) {

        // If element is an array
        if (Array.isArray(item)) {

            // Recursively flatten and add elements
            result.push(...flattenArray(item));
        }
        else {

            // Add normal element
            result.push(item);
        }
    }

    return result;
}

// Example
let arr = [1, [2, 3], [4, [5, 6]]];

console.log(flattenArray(arr));
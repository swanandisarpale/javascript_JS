// Function to find duplicate elements
function findDuplicates(arr) {

    // Set to store visited elements
    let seen = new Set();

    // Set to store duplicates
    let duplicates = new Set();

    // Traverse array
    for (let num of arr) {

        // If already seen, it is duplicate
        if (seen.has(num)) {
            duplicates.add(num);
        }
        // Otherwise add to seen set
        else {
            seen.add(num);
        }
    }

    // Convert Set into Array
    return [...duplicates];
}

// Example
let numbers = [1, 2, 3, 2, 4, 5, 3, 6];

console.log(findDuplicates(numbers));
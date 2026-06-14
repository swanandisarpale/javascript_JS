// Function to find first unique character
function firstNonRepeating(str) {

    let frequency = {};

    // Count frequency of each character
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Find first character with count 1
    for (let char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
}

// Example
console.log(firstNonRepeating("aabbcdde"));
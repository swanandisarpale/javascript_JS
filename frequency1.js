// Function to count character frequency
function characterFrequency(str) {

    // Object to store frequencies
    let frequency = {};

    // Loop through each character
    for (let char of str) {

        // If character already exists, increment count
        if (frequency[char]) {
            frequency[char]++;
        }
        // Otherwise initialize count as 1
        else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

// Example
console.log(characterFrequency("javascript"));
// Function to reverse words in a sentence
function reverseWords(sentence) {

    // Convert sentence into array of words
    let words = sentence.split(" ");

    // Reverse the array of words
    words.reverse();

    // Join words back into a string
    return words.join(" ");
}

// Example
let sentence = "JavaScript is awesome";

console.log(reverseWords(sentence));
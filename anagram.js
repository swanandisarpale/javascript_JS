// Function to check anagram
function isAnagram(str1, str2) {

    // Convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Sort characters and compare
    return str1.split("").sort().join("") ===
           str2.split("").sort().join("");
}

// Example
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
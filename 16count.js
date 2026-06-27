function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript"));
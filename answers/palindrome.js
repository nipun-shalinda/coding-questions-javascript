// Q: Write a function that checks whether a giver string is palindrome?
// Polyndeome is the word same forward and backword

function isPalindrome(str) {
  const revesed = str.split('').reverse().join('');

  return revesed === str;
}

module.exports = { isPalindrome };

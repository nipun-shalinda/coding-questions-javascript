// Q: Write a function that checks whether a giver string is palindrome?
// Polyndeome is the word same forward and backword

function isPalindrome(str) {
  const revesed = str.split('').reverse().join('');

  return revesed === str;
}

// is the string is a sentence,
function isPalindrome(str) {
  let revesed = '';

  for(i = str.length -1; i >=0; i--){
    if(str[i] !== ' '){
      revesed += str[i]
    }
  }

  return revesed === str;
}

module.exports = { isPalindrome };

// Q:  write a function that check whether two strings are anagram or not
// An anagram is a word formed by rearranging the letter of another
// eg: word(areAnagram("listen", "silent")

function checkAnagram(str_1, str_2) {
  return str_1.split('').sort().join('') === str_2.split('').sort().join('');
}

module.exports = checkAnagram;
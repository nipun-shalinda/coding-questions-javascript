// run `node index.js` in the terminal
const { reverseStringOne, reverseStringTwo } = require('./answers/reverse');
const { findLongestWord } = require('./answers/longest');
const { isPalindrome } = require('./answers/palindrome');
const {
  removeDuplicatesOne,
  removeDuplicatesTwo,
  removeDuplicatesThree,
} = require('./answers/removeDuplicates');
const checkAnagram = require('./answers/anagram');
const { vowelCount } = require('./answers/vowelsCount');
const {
  getLargestNum,
  getLargestNumTwo,
  getLargestNumThree,
} = require('./answers/largestNumber');
const { checkPrimeNum } = require('./answers/checkPrimenum');
const { factorial } = require('./answers/falcorial');
const {
  removeWhiteSpaces,
  removeWhiteSpacesTwo,
  removeWhiteSpacesThree,
} = require('./answers/removeSpaces');

let input = 'Hello World!';
let output;

// ******* COMMON QUESTIONs ********

// Q1 Reverse string
// output = reverseStringOne(input); //Method one
// output = reverseStringTwo(input); //Method Two

// Q2 longest word of a sentence
// output = findLongestWord(input);

// Q3 is the strinf is palindrome
// input = 'rotator';
// output = isPalindrome(input);

// Q4 remove duplicates of an array
// input = [1, 2, 2, 3, 4, 5, 5, 5, 6];
// output = removeDuplicatesOne(input); //Method one
// output = removeDuplicatesTwo(input); //Method two
// output = removeDuplicatesThree(input); //Method three

// Q5 Check whether two strings are anagram or not
// output = checkAnagram('lsten', 'silent');

// Q6: Write a function that returns the number of vowels in a string?
// output = vowelCount(input);

// Q7: Find largest number from an array
// input = [1, 2, 2, 3, 4, 5, 5, 5, 6];
// output = getLargestNum(input); //Method one
// output = getLargestNumTwo(input); //Method two
// output = getLargestNumThree(input); //Method three

// Q8: Check whether the given number is prime or not?
// output = checkPrimeNum(3);

// Q9: Write a fucntion to calculate the factorial of a number. ( if num is 5 => 5*4*3*2*1 = 120 )
// output = factorial(4);

// Q10: Remove all whitespace characters from a string
// output = removeWhiteSpaces(input); //Method one
// output = removeWhiteSpacesTwo(input); //Method two
// output = removeWhiteSpacesThree(input); //Method three

//Output
console.log(output);

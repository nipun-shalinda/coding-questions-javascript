// Q2. Find the longest word of a sentence?

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

module.exports = { findLongestWord };

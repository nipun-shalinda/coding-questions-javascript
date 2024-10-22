//Q: Write a function that returns the number of vowels in a string?

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  str.split('').forEach((e) => {
    if (vowels.includes(e)) {
      count++;
    }
  });

  return count;
}

module.exports = {vowelCount};
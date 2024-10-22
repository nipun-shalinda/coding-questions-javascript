// Q: Write a fuction to remove all whitespace characters from a string

//Mehtod 1
function removeWhiteSpaces(str) {
  return str.split(' ').join('');
}

//Mehtod 2
function removeWhiteSpacesTwo(str) {
  return str.replace(/\s/g, '');
}

//Mehtod 3
function removeWhiteSpacesThree(str) {
  let nonSpaceWord = [];
  const letters = str.split('');
  for (letter of letters) {
    if (letter !== ' ') {
      nonSpaceWord.push(letter);
    }
  }
  return nonSpaceWord.join('');
}

module.exports = {
  removeWhiteSpaces,
  removeWhiteSpacesTwo,
  removeWhiteSpacesThree,
};

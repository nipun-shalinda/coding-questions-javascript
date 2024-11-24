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

//method 4
function removeSpaces(str){
  let nonSpaceStr =''

  for(let i=0; i< str.length; i++){
      if(str[i] !== ' '){
          nonSpaceStr += str[i]
      }
  }
  return nonSpaceStr
}

function whiteSpaces(str) {
  let noSpaces =''
  str.split('').forEach(e => {
      if(e !== ' '){
          noSpaces += e
      }
  })
 return noSpaces
}

module.exports = {
  removeWhiteSpaces,
  removeWhiteSpacesTwo,
  removeWhiteSpacesThree,
};

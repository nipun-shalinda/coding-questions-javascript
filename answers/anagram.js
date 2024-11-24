// Q:  write a function that check whether two strings are anagram or not
// An anagram is a word formed by rearranging the letter of another
// eg: word(areAnagram("listen", "silent")

function checkAnagram(str_1, str_2) {
  return str_1.split('').sort().join('') === str_2.split('').sort().join('');
}

//Method 2

function checkAnagram(str_1, str_2) {
  return str_1.split('').sort().join('') === str_2.split('').sort().join('');
}

function sortStr(str){

  let arr = str.split('')

  for(let i=0; i< arr.length; i++){
    for(let j=i; j< arr.length; j++){
      if(arr[j] > arr[j+1] && i !== j){
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr.join('')
}

module.exports = checkAnagram;
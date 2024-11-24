// Q: Remove duplicate elements of an array?

// Method 1
function removeDuplicatesOne(arr) {
  return [...new Set(arr)];
}

// Method 2
function removeDuplicatesTwo(arr) {
  let uniqueArr = [];

  arr.forEach((e) => {
    if (!uniqueArr.includes(e)) {
      uniqueArr.push(e);
    }
  });

  return uniqueArr;
}

// Method 3
function removeDuplicatesThree(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// Method 4
function removeDuplicates(arr){

  let unique =[]

  arr.forEach((e) => {
      let found = false;
      for(val of unique){
          if(e === val){
              found = true;
          }
      }
      if(!found){
          unique.push(e)
      }
  })
  return unique
}

module.exports = {
  removeDuplicatesOne,
  removeDuplicatesTwo,
  removeDuplicatesThree,
};

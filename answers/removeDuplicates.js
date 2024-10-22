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

module.exports = {
  removeDuplicatesOne,
  removeDuplicatesTwo,
  removeDuplicatesThree,
};

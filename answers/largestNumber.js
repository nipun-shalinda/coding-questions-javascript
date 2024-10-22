// Q: find largest number from an array

//Method 1
function getLargestNum(arr) {
  return Math.max(...arr);
}

//Method 2
function getLargestNumTwo(arr) {
  const lortedArr = arr.sort();
  return lortedArr[arr.length - 1];
}

//Method 3
function getLargestNumThree(arr) {
  let max = arr[0];

  for (e of arr) {
    if (e > max) {
      max = e;
    }
  }

  return max;
}

module.exports = { getLargestNum, getLargestNumTwo, getLargestNumThree };

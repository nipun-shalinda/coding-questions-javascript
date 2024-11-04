//Q: Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEven(arr){
    return arr.filter(e => e % 2 === 0)
}

module.exports = {filterEven}
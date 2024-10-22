//Q: Write a function that returns the reverse of a string?

// Method 1
function reverseStringOne(str) {
  return str.split('').reverse().join('');
}

//Method 2
function reverseStringTwo(str) {
  let reversed = '';

  for (let i = str.lenght - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = { reverseStringOne, reverseStringTwo };

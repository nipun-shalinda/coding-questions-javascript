//Q: Check whether the given number is prime or not?

function checkPrimeNum(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = { checkPrimeNum };

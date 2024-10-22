// Q: Write  a fucntion to calculate the factorial of a number. ( if num is 5 => 5*4*3*2*1 = 120 )

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

module.exports = { factorial };

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num1, num2, num3;
  let num = n.toString();
  let result;
  if (num.length === 2) {
    result = Math.max(num.charAt(0),  num.charAt(1))
  }
  if (num.length === 3) {
  num1 = num.charAt(0) + num.charAt(1);
  num2 = num.charAt(1) + num.charAt(2);
  num3 = num.charAt(0) + num.charAt(2);
  result = Math.max(num1, num2, num3);
  } 
  if (num.length === 4) {
    num1 = num.charAt(0) + num.charAt(1) + num.charAt(2);
    num2 = num.charAt(1) + num.charAt(2) + num.charAt(3);
    num3 = num.charAt(0) + num.charAt(1) + num.charAt(3);
    result = Math.max(num1, num2, num3);
  }
  if (num.length === 5) {
    num1 = num.charAt(0) + num.charAt(1) + num.charAt(2) + num.charAt(3);
    num2 = num.charAt(1) + num.charAt(2) + num.charAt(3) + num.charAt(4);
    result = Math.max(num1, num2);
  }
  if (num.length === 6) {
    result = Number(num.charAt(0) + num.charAt(1) + num.charAt(2) + num.charAt(3) + num.charAt(5));
  }
  return result;
}

// deleteDigit(152)
// deleteDigit(1001)
// deleteDigit(10)
// deleteDigit(222219)
// deleteDigit(109)
// deleteDigit(342)

module.exports = {
  deleteDigit
};

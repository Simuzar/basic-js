const { NotImplementedError } = require("../extensions/index.js");

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
  const numberString = String(n);
  let maxNum = -Infinity;
  for (let i = 0; i < numberString.length; i++) {
    const newNum = Number(numberString.slice(0, i) + numberString.slice(i + 1));
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};

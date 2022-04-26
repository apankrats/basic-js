const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let cloneArr = arr.slice()
  let newArr = [];
  if (Array.isArray(cloneArr) === true) {
    for (let i = 0; i < cloneArr.length; i++) {
      if (cloneArr[i] === '--double-next') {
        cloneArr.splice(i, 1, i + 1);
      } else if (arr[i] === '--double-prev') {
        cloneArr.splice(i, 1, i);
      } else if (arr[i] === '--discard-next') {
        cloneArr.splice(i, 2);
      } 
      else if (arr[i] === '--discard-prev') {
        cloneArr.splice(i, 1);
      }
      newArr.push(cloneArr[i])
    }
    result = newArr
  } else {
    result = "'arr' parameter must be an instance of the Array!";
  }
  
  return result;
}

// transform([1, 2, 3, '--double-next', 4, 5])
// transform([1, 2, 3, '--double-prev', 4, 5])
// transform([1, 2, 3, '--discard-next', 4, 5])
// transform([1, 2, 3, '--discard-prev', 4, 5])
// transform('string')

module.exports = {
  transform
};

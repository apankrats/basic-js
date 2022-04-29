const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    calc(arr);

    function calc(arr) {
      if(Array.isArray(arr)) {
        depth ++;
        if (isContainsArray (arr)) {
          arr= arr.flat(1);
          calc(arr);
        }
      }
    }
    function isContainsArray(arr) {
      for (let item of arr) {
        if (Array.isArray(item)) {
          return true;
        }
        return false;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let map = new Map();
  let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        map.set(char, map.has(char) ? count++ : "");
    }
    console.log([...map], count);
}


// encodeLine('aaaatttt')
// encodeLine('aabbccc')
// encodeLine('abbcca')
// encodeLine('xyz')
// encodeLine('')

module.exports = {
  encodeLine
};

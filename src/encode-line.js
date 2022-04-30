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
  let res = "";
  let arr = str.split('');
  let n = 1;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i+1]) {
      n++;
    }
    else{
      res += n > 1 ? n+arr[i] : arr[i];
      n = 1;
    }
  }
  
  return res;
}

module.exports = {
  encodeLine
};

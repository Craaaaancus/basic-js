const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minusOne = []
  let from = 0;
  while (arr.indexOf(-1,from) != -1){
    let pos = arr.indexOf(-1,from);
    minusOne.push(-1);
    minusOne.push(pos)
    from = pos + 1;
  }
  let length = arr.length;
  arr = arr.sort((a,b) => a-b).filter(el => el != -1);
  for (let i = 0; i < length; i++){
    if (minusOne.includes(i)) arr.splice(i, 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight
};

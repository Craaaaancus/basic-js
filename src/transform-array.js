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
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  function isCommand(el){
    if (el != '--discard-prev' && el != '--discard-next' && el != '--double-next' && el != '--double-prev') return false;
    return true;
  }
  let arrCopy = Array.from(arr);
  
  for (let n = 0; n < arrCopy.length; n++){
    if (arrCopy[n] == '--discard-prev' && n != 0) {
      arrCopy.splice(n-1, 1);
      n--;
    }
    else if (arrCopy[n] == '--discard-next' && n != arrCopy.length - 1) {
      arrCopy.splice(n+1, 1);
    }
    else if (arrCopy[n] == '--double-next' && n != arrCopy.length - 1) {
      arrCopy[n] = arrCopy[n+1];
    }
    else if (arrCopy[n] == '--double-prev' && n != 0) {
      arrCopy[n] = arrCopy[n-1];
    }
  }

  arrCopy = arrCopy.filter(el => !isCommand(el));
  return arrCopy;
}

module.exports = {
  transform
};

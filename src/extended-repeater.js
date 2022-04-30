const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strings = [];
  let additions = [];
  if (options.repeatTimes){
    for (let i = 0; i < options.repeatTimes; i++){
      strings.push(str);
    }
  }
  else{
    strings.push(str);
  }
  if (options.addition?.toString() || options.addition === null) {
    if (options.additionRepeatTimes){
      for (let i = 0; i < options.additionRepeatTimes; i++){
        additions.push(`${options.addition}`);
      }
    }
    else{
      additions.push(`${options.addition}`);
    }
  }
  let sep = '+';
  if (options.separator){
    sep = options.separator;
  }
  let addSep = '|';
  if (options.additionSeparator){
    addSep = options.additionSeparator;
  }
  let addStr = additions.join(addSep);
  strings = strings.map(el => el + addStr);
  return strings.join(sep);
}

module.exports = {
  repeater
};

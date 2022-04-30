const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  chain: '',
  getLength() {
    if (!this.chain) return 0;
    return this.chain.match(/~~/g).length + 1;
  },
  addLink(value) {
    let temp = '';
    if (value !== undefined) temp = value;
    if (this.chain) {
      this.chain += `~~( ${temp} )`;
    }
    else{
      this.chain += `( ${temp} )`;
    }
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split('~~');
    let length = arr.length;
    if (!Number.isInteger(position) || position > length || position <= 0) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }
    arr.splice(position-1, 1);
    this.chain = arr.join('~~');
    return this;
  },
  reverseChain() {
    let arr = this.chain.split('~~');
    this.chain = arr.reverse().join('~~');
    return this;
  },
  finishChain() {
    let temp = this.chain;
    this.chain = '';
    return temp;
  }
};

module.exports = {
  chainMaker
};

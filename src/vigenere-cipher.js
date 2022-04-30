const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  state = null;
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' , 'Z'];
  constructor(state = true){
    this.state = state;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryption = '';
    for (let i = 0, j = 0; i < message.length; i++, j++){
      if (this.alphabet.indexOf(message[i]) == -1){
        encryption += message[i];
        j--;
        continue;
      }
      if (j == key.length) j = 0;
      let shift = this.alphabet.indexOf(key[j]);
      let newInx = this.alphabet.indexOf(message[i]) + shift; 
      newInx = newInx < this.alphabet.length ? newInx : newInx - this.alphabet.length;
      encryption += this.alphabet[newInx];
    }
    if (this.state){
      return encryption;
    }
    else{
      return encryption.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryption = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++){
      if (this.alphabet.indexOf(encryptedMessage[i]) == -1){
        decryption += encryptedMessage[i];
        j--;
        continue;
      }
      if (j == key.length) j = 0;
      let shift = this.alphabet.indexOf(key[j]);
      let newInx = this.alphabet.indexOf(encryptedMessage[i]) - shift;
      newInx = newInx >= 0 ? newInx : newInx + this.alphabet.length;
      decryption += this.alphabet[newInx];
    }
    if (this.state){
      return decryption;
    }
    else{
      return decryption.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

const assertEqual = require('./assertEqual');

const tail = function(input) {
  let newInput = [];
  for (let i = 1; i < input.length; i++){
    newInput.push(input[i]);
  }
    
  return newInput;
};


module.exports = tail;


const assertEqual = require('./assertEqual');

const tail = function(input) {
  let newInput = [];
  newInput += input.tail;
  return newInput;
};


module.exports = tail;


const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// function that returns the assertion of truthness or falseness
let assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    return `this is true`
  } else {
    return `this is false`
  }
}

module.exports = assertArraysEqual;
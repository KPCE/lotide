const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to compare two arrays, returns true if identical or false otherwise
let eqArrays = function(arr1, arr2){
  let bool = false;
  if (arr1.length === arr2.length){
    bool = true;
    for (let x = 0; x < arr1.length; x++){
      if (arr1[x] === arr2[x]){
        bool = true;
      } else {
        return false;
      }
    }
  }
  return bool;
};

// function that returns the assertion of truthness or falseness
let assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    return `this is true`
  } else {
    return `this is false`
  }
}

const numbers = [187, 534, 93, 24, 143, 523];
const words = ["ground", "control", "to", "major", "tom", "dethklok"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const resultant1 = map(words, word => word[0]);
console.log(resultant1);

const results2 = map(numbers, num => num[0]);



assertEqual(assertArraysEqual(resultant1, [ 'g', 'c', 't', 'm', 't', 'd' ]), 'this is true') // => true
assertEqual(assertArraysEqual(results2, [1, 5, 9, 2, 1, 5]), 'this is false') // => false

module.exports = map;
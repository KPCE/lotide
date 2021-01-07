const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to take in two arrays and return true or false based on perfect match

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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let bool = true;
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      bool = eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key] || object1[key].length !== object2[key].length) {
      bool = false;
    }
    // if (key1[key] === key2[key]){
    //   bool = true;
    }
    return bool
  }

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;

    if (eqObjects) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1})
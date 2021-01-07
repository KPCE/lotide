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



//test cases
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false) // => false
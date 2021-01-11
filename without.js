// assert equal function to compare two inputs
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

// //create function which takes in two arrays, the first is a list, the second are the items to be removed from that list
// let without = function(list, taboo) {
//   //loop through list, subloop through taboo comparing each item from 1 with 2, if it doesn't match, add it to a new array
//   let output = [];
  
//   for (let item of list){
//       for (let i = 0; i < taboo.length; i++){
//       let boolean; 
//       if (list[item] !== taboo[i]){
//         boolean = false
//         if (i === taboo.length - 1 && boolean === false){
//           output.push(list[item]);
//         }

//         //compare each value in  1 to 2, if false, move on to next one, if at the end and still false, add to output
//       } 
      
//     }
//   }
//   return output
// }


const without = function(list, taboo){
  let output = []
  for (let x = 0; x < list.length; x++){
    if (!taboo.includes(list[x])){
      output.push(list[x]);
    }
  }
  return output;
}

//tests
console.log(assertArraysEqual(without([1, 2, 3], [1]),[2, 3])) // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;
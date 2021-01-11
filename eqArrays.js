const assertEqual = require('./assertEqual');
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



module.exports = eqArrays;
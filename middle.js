//function to compare two arrays, returns true if identical or false otherwise
let eqArrays = function(arr1, arr2){
  let bool;
  if (arr1.length === arr2.length){
    bool = true;
    for (let x = 0; x < arr1.length; x++){
      if (arr1[x] === arr2[x]){
        bool = true;
      } else {
        return false;
      }
    }
    return bool;
  }
};

// function that returns the assertion of truthness or falseness
let assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    return `this is true`
  } else {
    return `this is false`
  }
}


//function middle to return an array of the middle value{s}
//check if one or two elements => return empty array
//check if even or odd array => return 2 or 1 middle value in an array
let middle = function (arr) {
  let midArr = []
  if (arr.length <= 2) {
    //console.log("I failed 1")
    return midArr
  } else if (arr.length % 2 === 0) {
    midArr.push(arr[arr.length / 2 - 1])
    midArr.push(arr[arr.length / 2])
    //console.log("I failed 2", midArr)
  } else {
    midArr.push(arr[Math.floor(arr.length / 2)])
    //console.log("I failed 3", midArr)
  }
  //console.log("I failed 4", midArr)
  return midArr
}


//test cases
console.log(assertArraysEqual(middle([1, 2, 3]),[2])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]
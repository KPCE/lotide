const assertArraysEqual = require('./assertArraysEqual');

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



module.exports = middle;
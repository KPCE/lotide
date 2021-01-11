const assert = require('chai').assert;
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

//test cases
// console.log(assertArraysEqual(middle([1, 2, 3]),[2])) // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // => [3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]


describe("#middle", () => {
  it("returns [2] when passed [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [3] when passed [1, 2, 3, 4, 5])", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns [2,3] when passed [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns [3,4] when passed [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});
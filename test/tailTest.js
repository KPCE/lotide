const assert = require('chai').assert;
const tail = require('../tail');
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];


// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns length of array is one less than original", () => {
    assert.strictEqual(tail(words).length, 2);
  });

});
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

//test cases
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), 'this is true') // => true
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), 'this is false') // => false

assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), 'this is true') // => true
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), 'this is false') // => false
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//create function that takes an object and a value
//loop through object values to find first match, return the key that matches that value

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj)
  let result = ""
  for (let key of keys) {
    if (obj[key] === value) {
      result = key
      
    }
  }
  
  return result
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
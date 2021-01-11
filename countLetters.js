// assert equal function to compare two inputs
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//take in a string and return count of the number of letters within that string
//alternatively could remove all spaces from word prior to for loop with splice
const countLetters = function(word) {
  let results = {};
  for (const letter of word) {
    if (results[letter]) {
      results[letter] += 1;
    } else if (letter === ' ') {
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

assertEqual(countLetters('super duper'),{s: 1, u: 2, p: 2, e: 2, r: 2, d: 1});

// const countOnly = function(allItems, itemsToCount){
//   let results = {};
//   for (const name of allItems) {
//     if (results[name]) {
//       results[name] += 1;
//     } else {
//       if (itemsToCount[name] === true) {
//         results[name] = 1;
//       }
//     }
//   }
//   return results;
// }
module.exports = countLetters
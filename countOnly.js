// assert equal function to compare two inputs
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings we need to look through
//itemsToCount: an object specifying what to count
//goal: return an object containing a count of the items specified in itemsToCount from allItems
const countOnly = function(allItems, itemsToCount){
  let results = {};
  for (const name of allItems) {
    if (results[name]) {
      results[name] += 1;
    } else {
      if (itemsToCount[name] === true) {
        results[name] = 1;
      }
    }
  }
  return results;
}


//test cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//console.log(countOnly(firstNames, {karl : true}))
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
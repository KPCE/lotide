//take in sentance, return object whose keys are the letters (without spaces)
//and whose values are arrays comprised of the indices where each letter can be found in the sentence passed
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      //results[letter] += 1; //change to return indice not count
    } else if (sentence[i] === ' ') {
    } else {
      results[sentence[i]] = [i]; //change to return array of the indice letter
    }
  }
  
  return results;
};
console.log(letterPositions);
module.exports = letterPositions;
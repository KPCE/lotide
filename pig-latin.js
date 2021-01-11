
const pigLatin = function() {
  const args = process.argv;
  const args2 = args.slice(2);
  //above takes input and removes location information returning an array of the input
  
  
  let string = ''
  
  //below first loop iterates through the elements of the array, adding it to the answer
  
    
    for (let i = 0; i < args2.length; i++){
     
      for (let j = 1; j < args2[i].length; j ++){
        string += args2[i][j]
    }
    string += args2[i][0] + 'ay '
   
    //reverse each string in the array and print
    }
    return string.trim();
}





  module.exports = pigLatin;
// print inputs line by line in reverse order, reversing all characters in arguments passed

 function countWords(stringOfWords) {
  //if imput is empty, return anm empty Object
  if (stringOfWords === '') {
    return  {};
  }
// result count obj
var counts = {};
//split input into a manageble array of words
var words = stringOfWords.split(' ');
//iterate over a array of words
for (var i = 0 ; i < words.length; i++){
var currentWord = words[i];
// check if current word is not in object
if (counts[currentWord] === undefined) {
 counts [currentWord] = 1;
} else{
counts [currentWord]++ ;
}
}
//returns the result count of tghe object
return counts;
}
/*
Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.
*/


var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);
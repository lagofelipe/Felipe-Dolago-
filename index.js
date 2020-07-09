function countWords(str) {
//v if statement handling empty string into an empty object
if (str ===''){
  return {};
}
/// v result object to receive all results
var result = {};
// v splitting imput string into an array of words
var words = str.split(' ');
//interating thru array of words
for (var i = 0; i < words.length; i++) {
  if (result[words[i]] === undefined) {
    result[words[i]] = 1;
} else {
     result[words[i]] ++;
  }
}//if its the first time will create key
//otherwise
///if is NOT the first time (existing key) increase it +1
// returning result to result object in line 7
return result;
}

/*
Write a function called "countWords".
Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
If given an empty string, it should return an empty object. */

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

// ********************* HELPER FUNCTION ******************

var createsRepeatStr = (str, times=1)=> {
  let repeatedStr = '';
  for (var i = 0; i < times; i++) {
    repeatedStr+= str ;
  }
  return repeatedStr;
}
// *****************************************************
var longestRun = function (string) {
  // TODO: Your code here!
  if(string.length === 0) {
    return null;
  }
  let longeststr = '';
  let count = 0;
  let charsSet= new Set(string.split(""));
  let repeatChars = [...charsSet];
  let longestRunIndices = [0, 0];
  for (var i = 0; i < repeatChars.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (repeatChars[i] === string[j]) {
        count++;
        if(string[j] !== string[j + 1]){
          count = 0;
        } else {
          let repeatedStr = createsRepeatStr(string[j], count + 1);
          if (longeststr.length < repeatedStr.length ) {
            longeststr = repeatedStr;
            end = j + 1  ;
            start = end - (longeststr.length - 1);
            longestRunIndices = [start, end];
          }
        }
      }
    }
  }
  return longestRunIndices;

};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

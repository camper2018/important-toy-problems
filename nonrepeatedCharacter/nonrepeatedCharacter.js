/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // first filter out the non repeated characters into an array.....
  // define an object that holds  all characters in the string as its properties and their counts as value.
  var charCounts = {};
  for (var i = 0; i < string.length; i++) {
    if (charCounts.hasOwnProperty(string[i])) {
      charCounts[string[i]]++;
    } else {
      charCounts[string[i]] = 1;
    }
  }
 // filter out the non repeated charactors
  var nonRepeatedChars = [];
  for (var char in charCounts) {
    if (charCounts[char] === 1) {
      nonRepeatedChars.push(char);
    }
  }
  //To get the first non repeat char, compare their indices ....
  var firstNonRepeatedChar = nonRepeatedChars.reduce(function(acc, item) {
    return (string.split().indexOf(item) < string.split().indexOf(acc))? item : acc;
  },nonRepeatedChars[0]);
  // return char with the lowest index.
  return firstNonRepeatedChar;
};

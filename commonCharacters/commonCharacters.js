/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!


  // initialize a variable
  var commonChars = "";
  // convert string1 to an array to compare each of its letters with the other strings
  var stringToCompare = string1.split("");
  //initialize a variable to hold other strings to be compared with string1
  var args= [...arguments].slice(1);
  // iterate over string1 array
  stringToCompare.forEach(function(item) {
    // iterate over other strings  to compare with string1 characters one by one and check if the strings contain the string1 character
    wasFound = args.every(function(string) {
      return string.includes(item);

    });
    //check if all other strings contain string1 character  then concatenate the string1 character into commonChars variable
    if(wasFound && !commonChars.includes(item) && item !== " ") {
      commonChars+=item;
    }
  });
  // provide commonChars as the operation's result
  return commonChars
};

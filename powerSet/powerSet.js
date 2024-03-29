/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var  result = []
  var uniqueArr = [...new Set(str)];
  var possibleSubsets = 2 ** uniqueArr.length;
  for (var i = 0; i < possibleSubsets;  i++) {
    var subset = ''
    for (var j = 0; j < uniqueArr.length; j++) {
      if ((i & Math.pow(2, j))) {
        subset += uniqueArr[j];
      }
    }
    subset = subset.split("").sort().join("");
    result.push(subset);
  }
  return result
};

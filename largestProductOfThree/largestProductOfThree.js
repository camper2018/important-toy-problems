/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  var arrayCopy = array.slice();
    var newArray =  arrayCopy.sort(function(n1, n2) {
      return n2 - n1;
    });
    return newArray[0] * newArray[1] * newArray[2];
};

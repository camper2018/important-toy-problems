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

  // make a copy of array
  var arrayCopy = array.slice();

  // sort arrayCopy  in descending order and store it in a variable
  var newArray =  arrayCopy.sort(function(n1, n2) {
    return n2 - n1;
  });

  // if newArray has mix negative and positive numbers
  if (newArray[newArray.length - 1] < 0 && newArray[0] >= 0) {

    // calculate 3 possible combinations of products that can contain largest product outcomes and store them in variables

    // first combo will hold product of first, second and  last numbers in newArray
    var product1= newArray[0] * newArray[1] * newArray[newArray.length - 1];

    // second combo will hold product of last 2 numbers and first one in newArray
    var product2 = newArray[0] * newArray[newArray.length - 2] * newArray[newArray.length - 1];

    // third combo will hold product of first 3 numbers
    var product3 = newArray[0] * newArray[1] * newArray[2];

    // compare them and return the larget one
    return Math.max(product1, product2, product3);

   // otherwise if all positive or all negative numbers, simply return product of first three numbers as newArray is already sorted
  } else {
    return newArray[0] * newArray[1] * newArray[2]
  }
};

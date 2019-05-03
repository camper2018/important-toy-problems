/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // initialize starting ending and mid pointers of the array
  var start = 0;
  var end = array.length -1;
  var midIndex = Math.round((start + end)/2);

// define a function that recursively searches for the given target using divide and conquer approach
  var searchForTarget = function(start, end, midIndex) {
    if (target === array[midIndex]) {
      return midIndex;
    } else if (target === array[start]) {
      return start;
    } else if (midIndex >= end || midIndex <= start) {
      return null;
    } else {
      if (target > array[midIndex]){
        start = midIndex;
        midIndex = Math.round((start + end)/2);
        return searchForTarget(start, end, midIndex);
      } else if (target < array[midIndex]) {
        end = midIndex;
        midIndex = Math.round((start + end)/2);
        return searchForTarget(start, end, midIndex);
      }
    }
  }
  return searchForTarget(start, end, midIndex);
};


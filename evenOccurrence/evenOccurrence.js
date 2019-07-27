/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    let occurances = 1;
    let currentNum = arr[i];
    let arrCopy = arr.slice("");
    arrCopy.splice(i, 1);
    if (arrCopy.indexOf(currentNum) > -1 ) {
      for (var j = 0; j < arrCopy.length; j++) {
        if(arrCopy[j] === currentNum) {
          occurances++;
        }
      }
      if (occurances % 2 === 0) {
        return currentNum;
      }
    }
  }
   return null
};

/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
   // check for equal length
   var appleLength = Object.keys(apple).length;
   var orangeLength = Object.keys(orange).length;
   // if different length return false
   if (appleLength !== orangeLength) {
      return false;
   }
   // otherwise check for equal values
   var haveEqualValues = true;
   var checkForEqualValues = function(obj1, obj2) {
     for (var key in obj1) {
        if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
         checkForEqualValues(obj1[key],obj2[key]);
        } else {
          if (!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
           haveEqualValues = false;
          }
        }
      }
    }
    checkForEqualValues(apple, orange);
    return haveEqualValues
};

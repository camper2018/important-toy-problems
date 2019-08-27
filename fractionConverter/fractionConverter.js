/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  // if number is a whole number
	if ( parseFloat(number) === parseInt( number) ) {
		return `${number}/1`;
  }
  // helper function that calculates greatest common divisor
  let gcd = (n1, n2) => {
    if (n2 === 0) {
      return n1;
    }
    return GCD(n2, n1%n2);
  };
  var len = number.toString().length - 2;
	var denominator = Math.pow(10, len);
	var numerator = number * denominator;
	var divisor = gcd(numerator, denominator);
	numerator /= divisor;
	denominator /= divisor;
	return `${numerator}/${denominator}`;
};

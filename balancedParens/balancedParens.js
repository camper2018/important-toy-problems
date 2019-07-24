/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

// ************ helper functions ****************

var isParenthesis = (char)=> {
  let parens = '{}()[]';
  if (parens.indexOf(char) > -1) {
    return true;
  }
  return false;
}
var isOpenParenthesis = (char) => {
 let openParens = '{([';
   if (openParens.indexOf(char) > -1) {
     return true;
   }
   return false;
}
var matches = (topOfStack, closedParen) => {
 let parens = {'(': ')', '{': '}', '[': ']'};
 return parens[topOfStack] === closedParen;
}
var balancedParens = function(input) {
  // if input is not falsy
  if(input) {
    let stack = [];
    let inputArr = input.split("");
    for (var i = 0; i < inputArr.length; i++) {
      // if current element is a parenthesis then...
      if (isParenthesis(inputArr[i])) {
        // if it is an opening parenthesis, store it in stack
        if (isOpenParenthesis(inputArr[i])) {
          stack.push(inputArr[i]);
        // otherwise it is a closing parenthesis...
        } else {
            // check if stack has no opening paren.. return false
            if (stack.length === 0) {
            return false;
            }
            // if stack has opening paren then check if the last/ recent paren in stack matches the current closing paren...
            // if not return false otherwise go to next element
            let top = stack.pop();
            if (!matches(top, inputArr[i])) {
              return false;
            } else {
              continue
            }
        }
      }
    }
    // if stack has opening paren but no matching closing paren found after iteration ...return false
    if (stack.length > 0) {
      return false;
    // otherwise if stack is empty so all matched parens... return true
    } else {
      return true;
    }
  } else {
    // if input is empty return true
    return true;
  }
};



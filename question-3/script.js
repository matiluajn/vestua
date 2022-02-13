/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */
 const isValid = function(s) {
  const stack = [];
  const closings = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(closings[s[i]])
      continue;
    }
    
    const requiredElement = stack.pop();
    
    if (s[i] !== requiredElement) return false;
  }
  
  if (stack.length > 0) return false;
  
  return true;
};
const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  // TODO: Implement validation logic
  return true;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);


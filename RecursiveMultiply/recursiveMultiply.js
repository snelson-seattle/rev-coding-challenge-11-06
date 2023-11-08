/*
    Recursive Multiply:
    Write a recursive function to multiply two positive integers without using the *operator. 
    You can use addition, subtraction, and bit shifting, but you should minimize the number of 
    those operations.
*/

function recursiveMultiply(a, b) {
  // This function only works for positive integers, so return -1 if any of the arguments are
  // less than 0
  if (a < 0 || b < 0) {
    return -1;
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return recursiveMultiply(a - 1, b) + b;
}

module.exports = recursiveMultiply;

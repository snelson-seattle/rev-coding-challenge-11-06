/* 
    Magic Index: 
    A magic index in an array A [ 0 ... n -1] is defined to be an index such that A[i] = i. 
    Given a sorted array of distinct integers, write a method to find a magic index, if one exists.
*/

function findMagicIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }

  return -1;
}

module.exports = findMagicIndex;

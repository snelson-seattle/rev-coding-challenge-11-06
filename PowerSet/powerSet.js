/* 
    Power Set:
    The power set of a set S is the set of all of the subsets of S, including the empty set and S itself. 
    The power set of set S is denoted as P(S).
    If the set S has n elements, then the power set P(S) would have 2^n elements
*/

function powerSet(arr = []) {
  const result = []; // P(S)
  const numCombinations = 2 ** arr.length; // total number of elements in P(S)

  // Outer for loop is a counter for the number of elements that should be in P(S)
  // Inner for loop is creating a subset of S for each element of P(S)
  for (
    let combinationIndex = 0;
    combinationIndex < numCombinations;
    combinationIndex++
  ) {
    const subSet = [];
    for (
      let setElementIndex = 0;
      setElementIndex < arr.length;
      setElementIndex++
    ) {
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(arr[setElementIndex]);
      }
    }
    result.push(subSet);
  }
  return result;
}

module.exports = powerSet;

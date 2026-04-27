function recursiveSum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + recursiveSum(arr.slice(1));
}
//Implement a JavaScript function to find the sum of all elements in an array recursively.
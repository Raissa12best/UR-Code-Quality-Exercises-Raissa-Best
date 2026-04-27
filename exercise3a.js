function nestingDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  const depths = arr.map(item => nestingDepth(item));
  return 1 + Math.max(0, ...depths);
}
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
console.log(flattenArray([2,[4,5,[7]]]))

console.log(nestingDepth([2,[4,5[7,8,9]]]))

//Write a function(s) that checks the level of nesting of an array.
//  Then, use that function to flatten the array into a single-dimensional array.
// Function arrayFlatten - version 2 without reduce method
function arrayFlatten(array) {
  arrayFlattened = [];
  for (let element of array) {
    arrayFlattened = arrayFlattened.concat(element);
  }
  return arrayFlattened;
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrayFlatten(arrays));
// → [1, 2, 3, 4, 5, 6]

function reverseArray(inputArray) {
  let temporaryArray = [];
  for (let element of inputArray) {
    temporaryArray.unshift(element);
  }
  return temporaryArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → [ 'C', 'B', 'A' ]

function arrayToList(arrayInput) {
  arrayLength = arrayInput.length - 1;
  let objectList = { value: arrayInput[arrayLength], rest: null };
  for (let index = arrayLength - 1; index >= 0; index--) {
    element = arrayInput[index];
    objectList = { value: element, rest: objectList };
  }
  return objectList;
}
console.log(arrayToList([10, 20, 30]));
//-> { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }

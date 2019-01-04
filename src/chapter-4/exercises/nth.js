function nth(objectList, index) {
  let arrayValue = [];
  for (let node = objectList; node; node = node.rest) {
    arrayValue.push(node.value);
  }
  return arrayValue[index];
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

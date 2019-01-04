// Function listToArray - version 2
function listToArray(objectList) {
  let arrayValue = [];
  let node = objectList;
  while (node) {
    arrayValue.push(node.value);
    node = node.rest;
  }
  return arrayValue;
}

console.log(listToArray(arrayToList([10, 20, 30, 40])));
//-> [ 10, 20, 30, 40 ]

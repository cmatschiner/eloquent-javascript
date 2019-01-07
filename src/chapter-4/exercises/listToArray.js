// Exercise 2
// Function  listToArray - version 1
export default function listToArray(objectList) {
  let arrayValue = [];
  for (let node = objectList; node; ) {
    // the final expresion can "empty" and the xpression attached to the end of the statement
    arrayValue.push(node.value);
    node = node.rest;
  }
  return arrayValue;
}

/* Explaination code:
The loop starts with the entire object list. With every iteration the expression node = node.rest „jumps" up a level of the list:
0: { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }
1: { value: 20, rest: { value: 30, rest: null } }
2: { value: 30, rest: null }
The final loop gives „null“. The condition node receices „null“ and exits.
*/

// Exercise 2
// Function listToArray - version 2
export function listToArrayV2(objectList) {
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
console.log(listToArrayV2(arrayToList([10, 20, 30, 40])));
//-> [ 10, 20, 30, 40 ]

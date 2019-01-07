// Exercise 3
// Function preprend
function prepend(value, rest) {
  let listObject = { value, rest };
  // Note: the object properties name are those uses as function parameters
  return listObject;
}

console.log(prepend(10, prepend(20, null)));
//-> { value: 10, rest: { value: 20, rest: null } }

// Function filter - version 1
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      // returns true if array element equals true
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(element => element.living));

// Function filter - version 2
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

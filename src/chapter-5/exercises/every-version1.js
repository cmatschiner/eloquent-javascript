// Exercise 3: Everything
// Function every - version 1 with loop
function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 12], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true.

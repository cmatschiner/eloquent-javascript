// function average
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
); // → 1188
console.log(
  Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
); // → 188

/* 
Interpretaion of results:
After analyzing above 140 scripts defined in Unicode, the results show that
dead scripts in Unicode are, on average, older than the living ones. 

Code explained:
The array filter method creates a new array with all elements that pass the test
of the function s => s.living. Then, the array map method creates a new array with
the results of calling the function s => s.year on every element in the calling array.
The resulting array is processed by the the function average, whereas all elememts
(years) are summed up with the array reduce method, and divided by the number of
array elements (= array.length)

*/

// function average – alternative version
let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188

// Simpler example
function arrayAverage(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

let a = [1, 2, 3];
console.log(arrayAverage(a));

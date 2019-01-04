/* Exercise 1: Flattening - version 1 with reduce() method
Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the 
original arrays. */

// Function arrayFlat
function arrayFlatten(array) {
  return array.reduce(
    (accumulator, arrayElement) => accumulator.concat(arrayElement),
    []
  );
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrayFlatten(arrays));

/* Explaination:
Using array.reduce every array of the array is consecutively added with the array.concat-method
to the new array "arrayFlattend". */

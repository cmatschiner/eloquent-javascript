// function reduce
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    console.log(element);
    current = combine(current, element); // combining function, whereas a=current & b=element
    console.log(current);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

reducer1 = (a, b) => a + b; // reducer function
console.log(reduce([1, 2, 3, 4], reducer1, 0));

// Analog array .reduce method
const array1 = [1, 2, 3, 4];
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer2));
console.log(array1.reduce(reducer2, 5));

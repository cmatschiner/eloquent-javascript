// Exercise 3: Everything
// Function every - version 1 with loop
export default function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

// Function every - version 2 with some() method
export function everySome(array, predicate) {
  return !array.some(element => !predicate(element));
}

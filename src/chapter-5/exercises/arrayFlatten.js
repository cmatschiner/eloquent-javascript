// Exercise 1: Flattening
// Function arrayFlat - version 1 with reduce() method
export default function arrayFlatten(array) {
  return array.reduce(
    (accumulator, arrayElement) => accumulator.concat(arrayElement),
    []
  );
}

// Function arrayFlatten - version 2 without reduce method
export function arrayFlattenV2(array) {
  let arrayFlattened = [];
  for (let element of array) {
    arrayFlattened = arrayFlattened.concat(element);
  }
  return arrayFlattened;
}

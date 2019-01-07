// Exercise
// FUnctionranheWitStep
function rangeWithStep(start, end, step = 1) {
  let listOfNumbers = [];
  if (step > 0 && end > start) {
    for (let index = start; index <= end; index += step) {
      listOfNumbers.push(index);
    }
  } else if (step > 0 && end < start) {
    for (let index = start; index >= end; index -= step) {
      listOfNumbers.push(index);
    }
  } else {
    for (let index = start; index >= end; index += step) {
      listOfNumbers.push(index);
    }
  }
  return listOfNumbers;
}

console.log(rangeWithStep(10, 1));
//-> [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(rangeWithStep(1, 10, 2));
//-> [ 1, 3, 5, 7, 9 ]
console.log(rangeWithStep(0, -10, -2));
//-> [ 0, -2, -4, -6, -8, -10 ]
console.log(rangeWithStep(10, 1, -2));
//-> [ 10, 8, 6, 4, 2 ]
console.log(rangeWithStep(-10, 0, 2));
//-> [ 10, 8, 6, 4, 2 ]

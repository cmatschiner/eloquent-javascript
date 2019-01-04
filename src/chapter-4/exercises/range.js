// Function range creates an array for given range
function range(start, end) {
  let listOfNumbers = [];
  for (let index = start; index <= end; index++) {
    listOfNumbers.push(index);
  }
  return listOfNumbers;
  // console.log(index); gives error due to block scope
}
console.log(range(0, 2));

// Function rangeStep with step paramter

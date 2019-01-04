// function sum
function sum(start, end) {
  let listOfNumbers = [];
  let sum = 0,
    check = 0;
  for (let index = start; index <= end; index++) {
    listOfNumbers.push(index);
    sum += listOfNumbers[check];
    check++;
  }
  return sum;
}

console.log(sum(1, 10));
//-> 55

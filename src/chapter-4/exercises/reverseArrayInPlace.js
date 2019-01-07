// Exercise 2
// Function reverseArrayInPlace - version 1
function reverseArrayInPlace(arrayValue) {
  let lengthArray = arrayValue.length - 1;
  for (let index = lengthArray; index >= 0; index--) {
    let element = arrayValue[index];
    arrayValue.push(element);
  }
  for (let index = 0; index <= lengthArray; index++) {
    arrayValue.shift();
  }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//-> [ 5, 4, 3, 2, 1 ]

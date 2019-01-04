// Function reverseArrayInPlace - version 1
function reverseArrayInPlace(arrayValue) {
  lengthArray = arrayValue.length - 1;
  for (let index = 0; index <= Math.floor(lengthArray / 2); index++) {
    swapElementA = arrayValue[index];
    swapElementB = arrayValue[lengthArray - index];
    arrayValue[index] = swapElementB;
    arrayValue[lengthArray - index] = swapElementA;
  }
}

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//-> [ 6, 5, 4, 3, 2, 1 ]

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//-> [ 5, 4, 3, 2, 1 ]

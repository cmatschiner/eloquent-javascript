/* Function countBy
The countBy function expects a collection (anything that we can loop over with for/of)
and a function. It returns an array of objects, each of which names a group and tells
you the number of elements that were found in that group.*/

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2)); // → [{name: false, count: 2}, {name: true, count: 3}]

// Function countBy - simplified version
function countByVerbose(inputArray, testFunction) {
  let outputArray = []; // output array of objects
  let arrayIndex = 0;

  for (let element of inputArray) {
    // array loop
    console.log(element); // 1, 2, 3, 4, 5
    console.log(arrayIndex); // 0, 1, 2, 3, 4
    arrayIndex++;

    let testResult = testFunction(element);
    /* the binding "testResult" is assigned to the testFunction and equals true 
    if the array's element fullfills testFunction criteria; in this 
    case: n => n > 2 */
    console.log(testResult); // false, false, true, true, true

    console.log(outputArray);
    // [], ​​​​​, ​​​​​[ { testResult: false, count: 2 } ], ​​​​​[ { testResult: false, count: 2 }, { testResult: true, count: 1 } ]

    let testIndex = outputArray.findIndex(c => c.testResult == testResult);
    /* the array.findIndex method finds the first index of the outputArray 
    for which the function (c => c.testResult == testResult) returns true, or returns 
    -1 when no such element is found: 

    outputArray = [] 
    value of inputArray index 0  = 1
    => returns -1 since testResult (false) not found in outputArray

    outputArray = [ { testResult: false, count: 1 } ] 
    / value of inputArray index 1  = 2
    => returns 0 since c.testResult(false) found in the outputArray and equals value of testResult (false)

    outputArray = [ { testResult: false, count: 2 } ] 
    / value of inputArray index 2  = 3
    => returns -1 since testResult (true) not found in outputArray

    outputArray = ​​​​​[ { testResult: false, count: 2 }, { testResult: true, count: 1 } ] 
    / value of inputArray index 3  = 4
    => returns 1 since c.testResult(true) found in index 1 of the outputArray and equals value of testResult (true)

    outputArray = ​​​​​[ { testResult: false, count: 2 }, { testResult: true, count: 2 } ] => 1
    / value of inputArray index 4  = 5
    => returns 1 since c.testResult(true) found in index 1 of the outputArray and equals value of testResult (true)
    */
    // console.log(testIndex); // -1, 0, -1, 1, 1

    if (testIndex == -1) {
      // adds a new object with the following properties:
      outputArray.push({
        testResult,
        count: 1
      });
    } else {
      outputArray[testIndex].count++; // increase county by 1
    }
  }
  return outputArray;
}

// console.log(countByVerbose([1, 2, 3, 4, 5], n => n > 2));
// → [{testResult: false, count: 2}, {testResult: true, count: 3}]

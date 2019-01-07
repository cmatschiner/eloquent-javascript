// Exercise 2: Your own loop
// Function loop
function loop(valueLoop, testFunction, updateFunction, bodyFunction) {
  let value = valueLoop;
  for (let i = 0; i < valueLoop; i++) {
    if (testFunction(value)) {
      bodyFunction(value);
      value = updateFunction(value);
    } else {
      break;
    }
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1

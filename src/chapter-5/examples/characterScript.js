/*  Function characterScript 
Finds the script that correspond to the given Unicode. 
*/
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// Function characterScript – explained step by step
function characterScriptVerbose(code) {
  for (let script of SCRIPTS) {
    let testFunction = ([from, to]) => {
      return code >= from && code < to;
    };
    if (script.ranges.some(testFunction)) {
      return script;
      // returns script whose range correlates with the given Unicode
    }
  }
  return null;
}

console.log(characterScript(121)); // → {name: "Latin", …}

// Simpler example

let testFunction = ([from, to]) => {
  return code >= from && code < to;
};
let code = 121;
console.log(SCRIPTS[1].ranges.some(testCode));

/*
Explaination:
The array some method returns the value true for the function
testCode if the numerical value of the variable code is within
the script's range, i.e. the code is larger or equal to from AND
smaller than to.
*/

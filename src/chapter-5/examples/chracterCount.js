// function characterCount
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// Function characterCount explained with simplified version:
let reducer = (count, [from, to]) => {
  return count + (to - from);
};
console.log(SCRIPTS[137].ranges.reduce(reducer, 0)); // 1220 √
console.log(SCRIPTS[137].ranges.reduce(reducer, 0)); // 1220 √
console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);

/* 
Explainaton:
The array reduce method in above console.log returns the script with 
the largest number of characters by using the reducer2 function. 

Latter compares the  character counts of consecutive Unicode scripts 
(var SCRIPTS) by employing the characterCount function and returns the 
script with the highest character count.

For each Unicode script, the characterCount function determines the 
number of characters based on the given ranges e.g. [[72192, 72264]], 
reduces (sums) them up with the reducer2 function (starting at 0) and 
returns the total character count for each script as one numerical value.
*/

// Alternative code for function reducer1
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

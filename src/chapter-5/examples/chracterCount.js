// Summarizing with reduce
// Function characterCount
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// Function characterCount: simplified version
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

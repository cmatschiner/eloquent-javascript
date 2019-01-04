// Function testForLiving
function testForLiving(script) {
  return script.living;
}

console.log(filter(SCRIPTS, testForLiving));

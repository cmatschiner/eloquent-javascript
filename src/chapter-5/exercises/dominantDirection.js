// Exercise 3: Dominant writing direction
// Function dominantDirection
import characterScript from "../examples/characterScript";
import countBy from "../examples/countBy";

export default function dominantDirection(text) {
  let scripts = countBy(text, char => {
    // returns array object(s) of type [{name: ltr, count: N},]
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none"; // returns script.direction of each character, or none if latter not in data set SCRIPTS
  }).filter(({ name }) => name !== "none"); // alternative code: (script => script.name != "none")
  // see chapter Destructuring in book "Elqouent JavaScript"
  if (scripts === []) return "no data"; // test if inout array empty
  if (scripts.length === 1) return scripts[0].name; // test if only one direction
  return scripts.reduce((a, b) => {
    if (a.count === b.count) return "same"; // test if equal nummber of ltr & rtr characters
    return a.count > b.count ? a.name : b.name;
  });
}

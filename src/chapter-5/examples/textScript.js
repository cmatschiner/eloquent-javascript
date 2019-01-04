/* Function countBy 
The function expects a collection (anything that we can 
loop over with for/of) and a function that computes a group name for a 
given element. It returns an array of objects, each of which names a group 
and tells you the number of elements that were found in that group. */
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// Function characterScript finds the script that correspond to the given Unicode.
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

// Function textScripts determines which scripts are used in a piece of text.
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

// Function textScripts – explained step by step
function textScriptsVerbose(text) {
  let testCode = char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  };
  /* The testCode function checks if the binding "script" is truthy, or, in other words, 
  if the Unicode of the text's character is within one of a script's range in the binding 
  SCRIPT; if not, it will return "none".*/

  let scriptsTemp = countBy(text, testCode);
  /* Binding "scriptsTemp" returns for the given text and above testCode an array of objects 
  with two properties: "name" of the script and count of chracters in the given text. */
  console.log(scriptsTemp);
  // ​​​​​=> [ { name: 'Han', count: 11 }, { name: 'NONDE', count: 6 }, { name: 'Latin', count: 4 }, { name: 'Cyrillic', count: 3 } ]

  let scripts = scriptsTemp.filter(script => script.name != "none");
  // The filter method creates a new array, which does include objects with the value "none".
  // The above code is an alternative to ({ name }) => name != "none"
  // QUESTION: what is the meaning of ({ name }) in the original arrow function?
  console.log(scripts);
  // ​​​​​=> [ { name: 'Han', count: 11 }, { name: 'Latin', count: 4 }, { name: 'Cyrillic', count: 3 } ]

  let total = scripts.reduce(
    (accumulator, script) => accumulator + script.count,
    0
  );
  // The reduce method adds up all counts for the array "scripts".
  // The above code is an alternative to (
  console.log(total); // 18 √

  if (total == 0) return "No scripts found";

  return scripts
    .map(script => {
      return `${Math.round((script.count / total) * 100)}% ${script.name}`;
      /* The map function creates a new array calling the above function on every element in
    the calling array "scripts". */
    })
    .join(", "); // removes [] and "" from returned array
}

console.log(textScriptsVerbose('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

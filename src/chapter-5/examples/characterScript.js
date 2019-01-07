// Strings and character codes
//  Function characterScript: returns name of script that correspond to a given Unicode.
import SCRIPTS from "./scripts";
export default function characterScript(code) {
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

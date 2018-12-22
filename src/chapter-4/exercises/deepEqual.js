export default function deepEqual(inputA, inputB) {
  if (inputA === inputB) return true; // test 1: return true if both are identical e.g. the same object instance, array or primitive value
  if (inputA === null || inputB === null) return false; // test 2: return false if one value is null
  if (inputA === undefined || inputB === undefined) return false;
  if (typeof inputA !== "object" && typeof inputB !== "object") return false; // test 3: return false if both are not objects and not identical
  let allKeys = Object.keys(inputA);
  for (let key of Object.keys(inputB)) {
    if (!allKeys.includes(key)) allKeys.push(key);
  }
  for (let key of allKeys) {
    if (deepEqual(inputA[key], inputB[key]) === false) return false; // { x:1, c: 4} !== {x:1, c: 3} => return false
  }
  return true;
}

export function alsoWorkingButSlowerDeepEqual(inputA, inputB) {
  if (inputA === inputB) return true; // test 1: return true if both are identical e.g. the same object instance, array or primitive value
  if (inputA === null || inputB === null) return false; // test 2: return false if one value is null
  if (inputA === undefined || inputB === undefined) return false;
  if (typeof inputA !== "object" && typeof inputB !== "object") return false; // test 3: return false if both are not objects and not identical

  for (let key of Object.keys(inputA)) {
    if (deepEqual(inputA[key], inputB[key]) === false) return false; // { x:1, c: 4} !== {x:1, c: 3} => return false
  }
  for (let key of Object.keys(inputB)) {
    if (deepEqual(inputA[key], inputB[key]) === false) return false; // { x:1, c: 4} !== {x:1, c: 3} => return false
  }
  return true;
}

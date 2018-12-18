export default function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return a === b;
  if (typeof a !== "object" || typeof b !== "object") return a === b;
  const aKeys = Object.keys(a);
  const combinedKeys = aKeys.concat(
    Object.keys(b).filter(key => !aKeys.includes(key))
  );
  return !combinedKeys.find(key => !deepEqual(a[key], b[key]));
}

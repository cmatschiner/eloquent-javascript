// Exercise 3: Everything
// Function every - version 1 with loop
export default function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

// Function every - version 2 with some() method
export function everySome(array, predicate) {
  return !array.some(element => !predicate(element));
}

/* Explanation:
To test if ALL elements pass the test with the some() method, use De Morgan’s laws, which states that
!(A && B) === !A || !B

In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

We can modify De Morgan’s laws by using a double negation:
(A && B) === !(!A || !B)

Since we have N elements in an array[A, B, C, ...], we have to test each element – just as we did in
  version 1 with < !test(element) >.Only this time, we use the some() method.

!(...) translates into!array.some() and!A || !B into < !test(element) > */

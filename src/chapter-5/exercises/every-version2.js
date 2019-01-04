// Exercise 3: Everything
// Function every - version 2 with some() method
function every(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 12], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true.

/* Explaination:
To test if ALL elements pass the test with the some() method, use De Morgan’s laws, which states that
!(A && B) === !A || !B

In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

We can modify De Morgan’s laws by using a double negation:
(A && B) === ! (!A || !B)

Since we have N elements in an array [A, B, C, ...], we have to test each element – just as we did in
version 1 with <!test(element)>. Only this time, we use the some() method .

! (...) translates into !array.some() and !A || !B into <!test(element)>
*/

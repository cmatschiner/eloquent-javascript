// Chapter 6 / Exercise 4: Borrowing a method

// Simple object
let mapRegular = {one: true, two: true, three: true};
console.log(mapRegular.hasOwnProperty("one")); // -> true

// What to do if an object has hasOwnProperty as key:
let map = {one: true, two: true, hasOwnProperty: true};

/* Use another or empty object's hasOwnProperty and call it with 
'this' set to the key: function.call(thisArg, arg1, arg2, ...) */
console.log(({}).hasOwnProperty.call(map, 'one')); // -> true

/* Or use the hasOwnProperty property from the Object prototype for 
this purpose: */
console.log(Object.prototype.hasOwnProperty.call(map, 'one')); // -> true
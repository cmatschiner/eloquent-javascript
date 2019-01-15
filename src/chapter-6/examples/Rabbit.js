/* NORMAL function
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
*/

/* CONSTRUCTOR function equavelent to class notation
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
*/

// CLASS notation
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
        // -> ​​​​​The killer rabbit says 'Hi'​​​​​
    }
}

// Creating new object instances: 
// new operator creates an new instance of the user-defined object Rabbit 
let weirdRabbit = new Rabbit("weird");
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


// Prototypes:
// Rabbit:
console.log(Rabbit); // constructor function
// -> [λ: Rabbit]
console.log(Rabbit.type);
// -> undefined
console.log(Rabbit.prototype); // prototype property
// -> Rabbit {}
/* The actual prototype of a constructor (e.g. Rabbit) is 
Function.prototype since constructors are functions. 
Its prototype property holds the prototype used for instances 
(e.g. weirdRabbit) created through it. */
console.log(Object.getPrototypeOf(Rabbit));
// -> { [λ] [Symbol(Symbol.hasInstance)]: [λ: [Symbol.hasInstance]] }
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true

// weirdRabbit
console.log(weirdRabbit);
// -> Rabbit {type: 'weird'}
console.log(weirdRabbit.type);
// -> weird
console.log(weirdRabbit.prototype);
// -> undefined
console.log(Object.getPrototypeOf(weirdRabbit));
// ->  Rabbit {}
console.log(Object.getPrototypeOf(weirdRabbit) == Function.prototype);
// → false
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true

// Modifying the ...

/* Case 1: ... property of the prototype ...
changes the prototype of the instances that derive their value(s) 
from it, but not that of the constructor function (parent) */
Rabbit.prototype.teeth = "small";
console.log(Rabbit.prototype); // -> Rabbit {teeth.small}
console.log(Rabbit.teeth); // -> undefined
console.log(Rabbit.prototype.teeth); // → small
console.log(killerRabbit.teeth); // → small
console.log(weirdRabbit.teeth); // -> small
console.log(blackRabbit.teeth); // → small

/* Case 2: ... property of the constructor (parent) ...
changes latters property, but not that of the
prototype or releated instances */
Rabbit.teeth = "normal";
console.log(Rabbit.prototype); // -> Rabbit {teeth.small}
console.log(Rabbit.teeth); // -> normal
console.log(Rabbit.prototype.teeth); // → small
console.log(killerRabbit.teeth); // → small
console.log(weirdRabbit.teeth); // -> small
console.log(blackRabbit.teeth); // → small

/* Case 3: ... property of one instance ...
only changes latters property, but not that of its
prototype or siblings, nor its constructor (parent) */
killerRabbit.teeth = "long, sharp, and bloody";
console.log(Rabbit.teeth); // -> normal
console.log(Rabbit.prototype.teeth); // → small
console.log(killerRabbit.teeth); // → long, sharp, and bloody
console.log(weirdRabbit.teeth); // -> small
console.log(blackRabbit.teeth); // → small

// Polymorphism
console.log(Rabbit.prototype.toString());
// –> [object Object]
console.log(blackRabbit.toString());
// –> [object Object]
console.log(String(blackRabbit));
// –> [object Object]

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};

console.log(Rabbit.prototype.toString());
// -> a undefined rabbit
console.log(blackRabbit.toString());
// -> a black rabbit
console.log(String(blackRabbit));
// → a black rabbit
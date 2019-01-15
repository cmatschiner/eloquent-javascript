// This code is the same as ...
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
/* A property like speak(line) in an object expression is a shorthand 
way of defining a method. It creates a property called speak and gives 
it a function as its value. */

/* ... this code
let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
*/

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

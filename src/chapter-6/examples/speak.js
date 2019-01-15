function speak(line) { // function declaration
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + // object.method
    "how late it's getting!"); 
    // → The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

hungryRabbit.speak("I could use a carrot right now."); 
// → The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!"); // function.call(this, argument)
// → The hungry rabbit says 'Burp!'​​​​​
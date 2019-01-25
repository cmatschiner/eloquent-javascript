class Person {
    /* The class statement indicates that we are creating a new class. 
    Inside this block, we define all the features of the class: */
    constructor(first, last, age, gender, interests) {
      /* The constructor() method defines the constructor function 
      that represents our Person class. */
      this.name = {first, last};
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
    /* greeting() and farewell() are class methods. Any methods you 
    want associated with the class are defined inside it, after the 
    constructor. In this example, we've used template literals rather 
    than string concatenation to make the code easier to read: */
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

